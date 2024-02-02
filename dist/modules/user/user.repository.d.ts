import { User } from 'src/entities/user.entity';
import { FindOneOptions, Repository } from 'typeorm';
export declare class UserRepository {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findOneWithCondition(options: FindOneOptions<User>): Promise<User>;
    createNewUser(user: Partial<User>): Promise<Partial<User> & User>;
}
