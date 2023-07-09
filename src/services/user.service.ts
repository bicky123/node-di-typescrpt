import { Service } from "typedi";
import { IUser } from '../domain/user.domain';
import { IUserDto } from '../dto/user.dto';
import { IAddUserModel } from '../models/add-user.model';
import { UserRepository } from '../repositories/user.repository';

@Service({ transient: true })
export class UserService {
    /**
     *
     */
    constructor(private readonly userRepository: UserRepository) { }

    async getUserById(id: number): Promise<IUserDto | undefined> {
        const users = await this.userRepository.getUsers();
        if (!users || users.length === 0) {
            return undefined;
        }
        const user: IUserDto | undefined = users.find(val => val.id === id);
        return user;
    }

    async getUserByEmail(email: string): Promise<IUserDto | undefined> {
        const users = await this.userRepository.getUsers();
        if (!users || users.length === 0) {
            return undefined;
        }
        const user: IUserDto | undefined = users.find(val => val.email === email);
        return user;
    }

    async getUsers(): Promise<Array<IUserDto> | undefined> {
        const users: Array<IUserDto> = await this.userRepository.getUsers();
        if (!users || users.length === 0) {
            return undefined;
        }
        return users;
    }

    async addUser(user: IAddUserModel): Promise<boolean> {
        let users = await this.userRepository.getUsers();
        users = users.sort(val => val.id);
        let id: number = 1;
        if (users && users.length > 0) {
            id = users[users.length - 1].id + 1;
        }
        const newUser: IUser = user as IUser;
        newUser.id = id;
        users.push(newUser);
        const res = await this.userRepository.addUser(users);
        if (!res) {
            return false;
        }
        return true;
    }

}