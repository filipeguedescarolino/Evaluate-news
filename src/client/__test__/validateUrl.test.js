import { validateUrl } from "../js/validateUrl";

describe("Testing the url validation functionality", () => {
    test("Testing the validateUrl() function", () => {
        expect(validateUrl).toBeDefined();
    });

    test("Should be a function", () => {
        expect(typeof validateUrl).toBe("function");
    });

    test("It returns true when a valid url is entered", () => {
        const urls = [
            "https://example.com",
            "https://www.example.com"
        ];

        urls.forEach(url => {
            expect(validateUrl(url)).toBeThruth;
        });
    });

    test('It should return false if invalid URL is entered', () => {
        expect(validateUrl("google.")).toBeFalsy();
    });
});