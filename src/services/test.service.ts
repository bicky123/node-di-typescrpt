import { Service } from "typedi";

@Service()
export class TestServices {

    constructor() { }

    test() {
        return 'this is test services';
    }
}