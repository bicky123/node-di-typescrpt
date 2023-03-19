import { Service } from "typedi";
import { TestServices } from "../services/test-service";

@Service()
export class TestRepository {
    
    constructor(private readonly testServices: TestServices) { }

    public test(): string {
        console.log(this.testServices.test());
        return 'this is test';
    }
}