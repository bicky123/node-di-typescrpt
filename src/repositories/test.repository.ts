import { Service } from "typedi";

@Service()
export class TestRepository {
    
    constructor() { }

    public test() {
        return 'this is test services';
    }
}