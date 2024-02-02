import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';
import { CarPark } from 'src/entities/carpark.entity';
import { FavoriteList } from 'src/entities/favorite-list.entity';
import { toNumber, toTrimString } from 'src/shared/util';

export class AddFavoriteCarpark {
  @ApiProperty()
  @Expose()
  @Transform(toTrimString)
  @IsString()
  @IsNotEmpty()
  carParkNo: string;
}

export class ListFavoriteCarpark {
  @ApiProperty({ required: false })
  @Transform(({ key, value }) => toNumber(key, value))
  @Min(1)
  @IsNumber()
  @IsOptional()
  page: number;

  @ApiProperty({ required: false })
  @Transform(({ key, value }) => toNumber(key, value))
  @Max(100)
  @Min(1)
  @IsNumber()
  @IsOptional()
  limit: number;
}

@Exclude()
class FavoriteCarpark {
  @ApiProperty()
  @Expose()
  carParkNo: string;

  @ApiProperty()
  @Expose()
  address: string;

  @ApiProperty()
  @Expose()
  xCoord: number;

  @ApiProperty()
  @Expose()
  yCoord: number;

  @ApiProperty()
  @Expose()
  carParkType: string;

  @ApiProperty()
  @Expose()
  typeOfParkingSystem: string;

  @ApiProperty()
  @Expose()
  shortTermParking: string;

  @ApiProperty()
  @Expose()
  freeParking: string;

  @ApiProperty()
  @Expose()
  nightParking: string;

  @ApiProperty()
  @Expose()
  carParkDecks: number;

  @ApiProperty()
  @Expose()
  gantryHeight: number;

  @ApiProperty()
  @Expose()
  carParkBasement: string;

  constructor(carpark: Partial<CarPark>) {
    Object.assign(this, carpark);
  }
}

@Exclude()
export class FavoriteListCarpark {
  @ApiProperty()
  @Expose()
  id: number;

  @ApiProperty()
  @Expose()
  userId: number;

  @ApiProperty()
  @Expose()
  carParkNoId: string;

  @ApiProperty()
  @Expose()
  status: string;

  @ApiProperty()
  @Expose()
  createdAt: string;

  @ApiProperty({ type: FavoriteCarpark })
  @Expose()
  @Type()
  carpark: FavoriteCarpark;

  constructor(favoriteList: Partial<FavoriteList>) {
    Object.assign(this, favoriteList);
  }
}

@Exclude()
export class FavoriteListResponse {
  @ApiProperty({ type: [FavoriteListCarpark] })
  @Expose()
  @Type(() => FavoriteListCarpark)
  data: FavoriteListCarpark[];

  @ApiProperty()
  @Expose()
  total: number;

  constructor(_data: FavoriteListCarpark[], _total: number) {
    this.data = _data;
    this.total = _total;
  }
}
