import { Response, Request, NextFunction } from "express";
import { Service } from "typedi";
import { APIDataResponse } from "../ApiResponse/apiDataResponse";
import { StatusCodes } from "../enums/status-codes";
import { APIResponse } from '../ApiResponse/apiResponse';
import { UserService } from '../services/user-service';
import { IUser } from "../domain/user";

@Service()
export class UserController {

    constructor(private readonly userService: UserService) { }

    async getUserById(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            const users: Array<IUser> = await this.userService.getUsers();
            if (!users || users.length === 0) {
                return res
                    .status(StatusCodes.Status404NotFound)
                    .send(new APIResponse(StatusCodes.Status404NotFound, "User does not exist"));
            }
            return res
                .status(StatusCodes.Status200OK)
                .send(new APIDataResponse<Array<IUser>>(StatusCodes.Status200OK, users, ""));

        } catch (ex) {
            next(ex);
        }
    }
}