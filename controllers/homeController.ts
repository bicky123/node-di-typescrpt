import { NextFunction, Request, Response } from 'express';
import { Service } from "typedi";
import { StatusCodes } from '../enums/status-codes';
import { TestRepository } from '../repositories/test-repository';

@Service()
export class HomeController {
    
    constructor(private testRepository: TestRepository) { }

    public async get(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            return res.status(StatusCodes.Status200OK).send({
                success: true,
                msg:  this.testRepository.test(),
                data: new Date().toISOString()
            });
        } catch (ex) {
            next(ex);
        }
    }

}