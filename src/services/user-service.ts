import * as fs from 'fs';
import { Service } from "typedi";
import * as path from 'path';
import { IUser } from '../domain/user';

@Service()
export class UserService {
    /**
     *
     */
    constructor() { }

    async getUsers(): Promise<Array<IUser>> {
        const usersBuffer: Buffer = await fs.readFileSync(path.join(__dirname, '../../../db/users.json'));
        const users: Array<IUser> = JSON.parse(usersBuffer.toString('utf-8'));
        return users;
    }
    
}