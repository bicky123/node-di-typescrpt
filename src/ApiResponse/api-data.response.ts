import { APIResponse } from "./api.response"

export class APIDataResponse<T> extends APIResponse {

    constructor(public statusCode: number, public data: T, public message: string = "", public errors: Array<string> = []) {
        super(statusCode, message, errors);
    }

}