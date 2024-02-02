import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { join } from 'path';
import { getDataFromCsv } from 'src/shared/util';
import { RawCarparkData } from '../carparks/carparks.interface';
import { CarparkService } from '../carparks/carparks.service';
import { getExecuteFile } from './schedule-task.util';

@Injectable()
export class ScheduleTaskService {
  constructor(private readonly carparkService: CarparkService) {}

  @Cron(CronExpression.EVERY_DAY_AT_5AM)
  async dailySyncUpDatabase() {
    const folderPath = join(__dirname, '../../../data');
    const file = getExecuteFile(folderPath);
    const filePath = join(folderPath, '/', file);

    const data: RawCarparkData[] = await getDataFromCsv(filePath);
    return this.carparkService.dailySyncUpDatabase(data);
  }
}
