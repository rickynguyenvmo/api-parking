import { User } from 'src/entities/user.entity';
import { FindOneOptions } from 'typeorm';
import { AuthRegisterResponse } from '../auth/auth.dto';
import { UserRepository } from './user.repository';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    findOneWithCondition(options: FindOneOptions<User>): Promise<User>;
    createNewUser(user: Partial<User>): Promise<Partial<User> & User>;
    getUserInfo(userId: number): Promise<AuthRegisterResponse>;
}
