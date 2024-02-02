import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findOneWithCondition(options: FindOneOptions<User>) {
    return this.userRepository.findOne(options);
  }

  createNewUser(user: Partial<User>) {
    return this.userRepository.save(user);
  }
}
