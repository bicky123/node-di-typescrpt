import { Service } from "typedi";
import { TestRepository } from "../repositories/test.repository";

@Service()
export class TestServices {

    constructor(private readonly testRepository: TestRepository) { }

    public test(): string {
        console.log(this.testRepository.test());
        return 'this is test';
    }

}