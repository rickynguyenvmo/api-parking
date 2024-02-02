import { Module } from '@nestjs/common';
import { FavoriteListService } from './favorite-list.service';
import { FavoriteListController } from './favorite-list.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoriteList } from 'src/entities/favorite-list.entity';
import { UserModule } from '../user/user.module';
import { FavoriteListRepository } from './favorite-list.repository';
import { CarparkModule } from '../carparks/carparks.module';

@Module({
  imports: [TypeOrmModule.forFeature([FavoriteList]), UserModule, CarparkModule],
  providers: [FavoriteListService, FavoriteListRepository],
  controllers: [FavoriteListController],
  exports: [FavoriteListService],
})
export class FavoriteListModule {}
