import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ETable } from '../../common/constant/constant';
import { CarPark } from '../../entities/carpark.entity';
import { Brackets, DataSource, FindManyOptions, FindOneOptions, In, Not, Repository } from 'typeorm';
import { FilterOptions, QueryListCarpark } from './carparks.dto';

@Injectable()
export class CarparkRepository {
  private readonly logger = new Logger(CarparkRepository.name);

  constructor(
    private dataSource: DataSource,
    @InjectRepository(CarPark)
    private readonly carparkRepository: Repository<CarPark>,
  ) {}

  findOneWithCondition(options: FindOneOptions<CarPark>) {
    return this.carparkRepository.findOne(options);
  }

  find(options?: FindManyOptions<CarPark>) {
    return this.carparkRepository.find(options);
  }

  async initDatabase(data: Partial<CarPark>[], listCarparkNo: string[]) {
    this.logger.log('Initializing Database');
    await this.handleDatabaseTransaction(data, listCarparkNo);
  }

  async dailySyncUpDatabase(data: Partial<CarPark>[], deletedCarparkNo: string[]) {
    this.logger.log('Daily Syncing Up Database');
    await this.handleDatabaseTransaction(data, deletedCarparkNo);
  }

  private async handleDatabaseTransaction(data: Partial<CarPark>[], carparkNumbers: string[]) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      await this.carparkRepository.save(data, { chunk: 200 });
      await this.carparkRepository.delete({ carParkNo: Not(In(carparkNumbers)) });
      await queryRunner.commitTransaction();
    } catch (error) {
      this.logger.error(error);
      await queryRunner.rollbackTransaction();
      throw new Error('Database transaction failed');
    } finally {
      await queryRunner.release();
    }
  }

  async getListCarpark(query: QueryListCarpark) {
    const { page = 1, limit = 20, freeParking, nightParking, gantryHeight } = query;

    const queryBuilder = this.carparkRepository.createQueryBuilder(ETable.CarPark);
    queryBuilder.where(`${ETable.CarPark}.carParkNo IS NOT NULL`);

    if (freeParking === FilterOptions.YES) {
      queryBuilder.andWhere(`${ETable.CarPark}.freeParking != :param`, { param: 'NO' });
    } else if (freeParking === FilterOptions.NO) {
      queryBuilder.andWhere(`${ETable.CarPark}.freeParking = :param`, { param: 'NO' });
    }

    if (nightParking) {
      queryBuilder.andWhere(`${ETable.CarPark}.nightParking = :nightParking`, {
        nightParking,
      });
    }

    if (gantryHeight) {
      queryBuilder.andWhere(
        new Brackets((subQuery) => {
          subQuery
            .where(`${ETable.CarPark}.gantryHeight = 0`)
            .orWhere(`${ETable.CarPark}.gantryHeight >= :gantryHeight`, {
              gantryHeight,
            });
        }),
      );
    }

    queryBuilder.skip((page - 1) * limit);
    queryBuilder.take(limit);

    try {
      return queryBuilder.getManyAndCount();
    } catch (error) {
      this.logger.error(error);
      throw new Error('Error while retrieving carpark list');
    }
  }
}
