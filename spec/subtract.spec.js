const math = require("../my-app");

describe("subtract feature", () => {
    let numberOne;
    let numberTwo;

    beforeEach(() => {
        numberOne = 2;
        numberTwo = 3;
    });

    it('case one', () => {
        expect(math.subtract(numberTwo, numberOne)).toEqual(1);
    });

    it('case two', () => {
        numberOne = -1;
        expect(math.subtract(numberOne, numberTwo)).toEqual(-4);
    });
})