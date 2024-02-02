import { ETable } from 'src/common/constant/constant';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CarPark } from './carpark.entity';
import { User } from './user.entity';

@Entity({ name: ETable.FavoriteList })
export class FavoriteList {
  @PrimaryGeneratedColumn('increment', {
    name: 'Id',
    type: 'integer',
  })
  id: number;

  @Column({
    name: 'User_id',
    type: 'integer',
  })
  userId: number;

  @Column({
    name: 'Car_park_no_id',
    type: 'varchar',
    length: '255',
  })
  carParkNoId: string;

  @Column({
    name: 'Status',
    type: 'varchar',
    default: 'ACTIVE',
  })
  status: string;

  @CreateDateColumn({
    name: 'Created_at',
  })
  createdAt: Date;

  @ManyToOne<User>(() => User, (user) => user.favoriteLists, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'User_id' })
  user: User;

  @ManyToOne<CarPark>(() => CarPark, (carpark) => carpark.favoriteLists, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'Car_park_no_id' })
  carpark: CarPark;
}
