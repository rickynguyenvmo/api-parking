import { Injectable, Logger } from '@nestjs/common';
import { join } from 'path';
import { CarPark } from 'src/entities/carpark.entity';
import { getDataFromCsv } from 'src/shared/util';
import { getExecuteFile } from '../schedule-task/schedule-task.util';
import { Carpark, ListCarparkResponse, QueryListCarpark } from './carparks.dto';
import { RawCarparkData } from './carparks.interface';
import { CarparkRepository } from './carparks.repository';
import { FindOneOptions } from 'typeorm';

@Injectable()
export class CarparkService {
  private readonly logger = new Logger(CarparkService.name);

  constructor(private readonly carparkRepo: CarparkRepository) {}

  findOneWithCondition(options: FindOneOptions<CarPark>) {
    return this.carparkRepo.findOneWithCondition(options);
  }

  async initDatabase() {
    try {
      const folderPath = join(__dirname, '../../../data');
      const file = getExecuteFile(folderPath);
      const filePath = join(folderPath, '/', file);

      const data: RawCarparkData[] = await getDataFromCsv(filePath);
      const ormData: Partial<CarPark>[] = this.transformRawData(data);
      const listCarparkNo = ormData.map((item) => item.carParkNo);

      await this.carparkRepo.initDatabase(ormData, listCarparkNo);
      this.logger.log('Database initialized successfully');
    } catch (error) {
      this.logger.error('Error initializing database', error);
      throw new Error('Database initialization failed');
    }
  }

  async dailySyncUpDatabase(data: RawCarparkData[]) {
    try {
      const allCarParkNo = await this.carparkRepo.find({
        select: ['carParkNo'],
      });
      const ormData: Partial<CarPark>[] = this.transformRawData(data);
      const listUpsertCarparkNo = ormData.map((item) => item.carParkNo);

      const listDeletedCarparkNo = allCarParkNo
        .map((item) => item.carParkNo)
        .filter((carParkNo) => !listUpsertCarparkNo.includes(carParkNo));

      await this.carparkRepo.dailySyncUpDatabase(ormData, listDeletedCarparkNo);
      this.logger.log('Database daily sync up completed successfully');
    } catch (error) {
      this.logger.error('Error in daily sync up', error);
      throw new Error('Daily sync up failed');
    }
  }

  async getListCarpark(query: QueryListCarpark) {
    try {
      const [data, total] = await this.carparkRepo.getListCarpark(query);

      const transformData = data.map((item) => new Carpark(item));
      return new ListCarparkResponse(transformData, total);
    } catch (error) {
      this.logger.error('Error getting carpark list', error);
      throw new Error('Failed to retrieve carpark list');
    }
  }

  private transformRawData(data: RawCarparkData[]): Partial<CarPark>[] {
    return data.map((item) => ({
      carParkNo: item.car_park_no,
      address: item.address,
      xCoord: +item.x_coord || 0.0,
      yCoord: +item.y_coord || 0.0,
      carParkType: item.car_park_type,
      typeOfParkingSystem: item.type_of_parking_system,
      shortTermParking: item.short_term_parking,
      freeParking: item.free_parking,
      nightParking: item.night_parking,
      carParkDecks: +item.car_park_decks || 0,
      gantryHeight: +item.gantry_height || 0,
      carParkBasement: item.car_park_basement,
    }));
  }
}
