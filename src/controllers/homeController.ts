import { NextFunction, Request, Response } from 'express';
import { Service } from "typedi";
import { APIDataResponse } from '../ApiResponse/apiDataResponse';
import { StatusCodes } from '../enums/status-codes';
import { TestRepository } from '../repositories/test-repository';

@Service()
export class HomeController {

    constructor(private testRepository: TestRepository) { }

    public async get(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            return res
                    .status(StatusCodes.Status200OK)
                    .send(new APIDataResponse<Array<string>>(StatusCodes.Status200OK, [this.testRepository.test()], "Data added successfully"));
        } catch (ex) {
            next(ex);
        }
    }

}