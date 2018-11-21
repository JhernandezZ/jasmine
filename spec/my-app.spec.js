var math = require("../my-app");

describe("Brief description of the Test Suite", () => {
    it("Docstring for each test", () => {
        expect(math.comparer(2, 3)).toEqual(false);
    })
});