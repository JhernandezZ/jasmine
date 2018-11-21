var math = require("../my-app");

describe("multiply feature", () => {
    let numberOne;
    let numberTwo;

    beforeEach(() => {
        numberOne = 5;
        numberTwo = 1;
    });

    it('case one', () => {
        expect(math.multiply(numberTwo, numberOne)).toEqual(numberOne);
    });

    it('case two', () => {
        numberTwo = 10;
        expect(math.multiply(numberOne, numberTwo)).toEqual(50);
    });
})
