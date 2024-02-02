import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          type: 'sqlite',
          database: join(__dirname, '../../../db/data.db'),
          logging: true,
          entities: ['dist/entities/*.entity.js'],
          synchronize: true,
        };
      },
    }),
  ],
})
export class DatabaseModule {}
