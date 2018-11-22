const math = require("../my-app");

describe("add feature", () => {
    let numberOne;
    let numberTwo;

    beforeEach(() => {
        numberOne = 2;
        numberTwo = 3;
    });

    it('case one', () => {
        expect(math.add(numberOne, numberTwo)).toEqual(5);
    });

    it('case two', () => {
        numberOne = -1;
        expect(math.add(numberOne, numberTwo)).toEqual(2);
    });
})