export class APIResponse {
    public success: boolean = false;

    constructor(public statusCode: number, public message: string = "", public errors: Array<string> = []) {
        this.success = this.checkStatusCode(statusCode);
    }

    private checkStatusCode(code: number): boolean {
        switch (code) {
            case 200:
                return true;
            case 201:
                return true;
            case 202:
                return true;
            case 204:
                return true;
            default:
                return false;
        }
    }
}