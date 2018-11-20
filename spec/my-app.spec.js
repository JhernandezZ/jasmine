var comparer = require("../my-app");
describe("Brief description of the Test Suite", () => {
    xit("Docstring for each test", () => {
        expect(comparer(2, 3)).toEqual(false);
    })
});