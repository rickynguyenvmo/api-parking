import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarPark } from 'src/entities/carpark.entity';
import { CarparkController } from './carparks.controller';
import { CarparkRepository } from './carparks.repository';
import { CarparkService } from './carparks.service';

@Module({
  imports: [TypeOrmModule.forFeature([CarPark])],
  providers: [CarparkRepository, CarparkService],
  controllers: [CarparkController],
  exports: [CarparkService],
})
export class CarparkModule {}
