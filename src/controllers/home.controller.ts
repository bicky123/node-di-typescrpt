import { NextFunction, Request, Response } from 'express';
import { Service } from "typedi";
import { APIDataResponse } from '../ApiResponse/api-data.response';
import { StatusCodes } from '../enums/status-codes';
import { TestRepository } from '../repositories/test.repository';
import { UserRepository } from '../repositories/user.repository';

@Service({ multiple: true })
export class HomeController {

    constructor(private testRepository: TestRepository, private readonly userRepository: UserRepository) { }

    public async get(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            console.log(this.userRepository);
            return res
                    .status(StatusCodes.Status200OK)
                    .send(new APIDataResponse<Array<string>>(StatusCodes.Status200OK, [this.testRepository.test()], "Data added successfully"));
        } catch (ex) {
            next(ex);
        }
    }

}