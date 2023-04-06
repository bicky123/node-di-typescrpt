import { Response, Request, NextFunction } from "express";
import { Service } from "typedi";
import { APIDataResponse } from "../ApiResponse/api-data.response";
import { StatusCodes } from "../enums/status-codes";
import { APIResponse } from '../ApiResponse/api.response';
import { UserRepository } from "../repositories/user.repository";
import { IUserDto } from "../dto/user.dto";
import { IAddUserModel } from "../models/add-user.model";

@Service({ multiple: true })
export class UserController {

    constructor(private readonly userRepository: UserRepository) { }

    async getUserById(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            const id: number = parseInt(req.params['id']);
            const user: IUserDto | undefined = await this.userRepository.getUserById(id);
            if (!user) {
                return res
                    .status(StatusCodes.Status404NotFound)
                    .send(new APIResponse(StatusCodes.Status404NotFound, "User does not exist"));
            }
            return res
                .status(StatusCodes.Status200OK)
                .send(new APIDataResponse<IUserDto>(StatusCodes.Status200OK, user, ""));

        } catch (ex) {
            next(ex);
        }
    }

    async getAllUsers(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            const users: Array<IUserDto> | undefined = await this.userRepository.getUsers();
            if (!users || users.length === 0) {
                return res
                    .status(StatusCodes.Status404NotFound)
                    .send(new APIResponse(StatusCodes.Status404NotFound, "User does not exist"));
            }
            return res
                .status(StatusCodes.Status200OK)
                .send(new APIDataResponse<Array<IUserDto>>(StatusCodes.Status200OK, users, ""));

        } catch (ex) {
            next(ex);
        }
    }

    async addUser(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            const model: IAddUserModel = req.body;
            const user: IUserDto | undefined = await this.userRepository.getUserByEmail(model.email);
            if (user) {
                return res
                    .status(StatusCodes.Status208AlreadyReported)
                    .send(new APIResponse(StatusCodes.Status208AlreadyReported, "User is already added"));
            }

            const result: boolean = await this.userRepository.addUser(model);
            if (!result) {
                return res
                    .status(StatusCodes.Status400BadRequest)
                    .send(new APIResponse(StatusCodes.Status400BadRequest, "Some error  occurs, Please try again latter"));
            }
            return res
                .status(StatusCodes.Status201Created)
                .send(new APIResponse(StatusCodes.Status201Created, "User added successfully"));
        } catch (ex) {
            next(ex);
        }
    }

    async updateUser(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            console.log(req.params);
            const id: number = parseInt(req.params['id']);
            const user: IUserDto | undefined = await this.userRepository.getUserById(id);
            if (!user) {
                return res
                    .status(StatusCodes.Status404NotFound)
                    .send(new APIResponse(StatusCodes.Status404NotFound, "User does not exist"));
            }
            return res
                .status(StatusCodes.Status200OK)
                .send(new APIDataResponse<IUserDto>(StatusCodes.Status200OK, user, ""));

        } catch (ex) {
            next(ex);
        }
    }
}