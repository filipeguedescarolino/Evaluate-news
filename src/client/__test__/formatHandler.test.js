import { handleSubmit2 } from "../js/formHandler"

describe("Testing the submit functionality", () => {
    test("Testing the handleSubmit() function", () => {
        expect(handleSubmit2).toBeDefined();
    });

    test('Should be a function', () => {
        expect(typeof handleSubmit2).toBe("function");
    });

});