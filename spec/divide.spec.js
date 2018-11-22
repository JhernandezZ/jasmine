const math = require("../my-app");
describe("divide feature", () => {
    let numberOne;
    let numberTwo;

    beforeEach(() => {
        numberOne = 5;
        numberTwo = 1;
    });

    it('case one', () => {
        expect(math.divide(numberOne, numberTwo)).toEqual(numberOne);
    });

    it('case two', () => {
        numberOne = 10;
        numberTwo = 2;
        expect(math.divide(numberOne, numberTwo)).toEqual(5);
    });
    
    it('case three', () => {
        numberOne = 10;
        numberTwo = 0;
        const result = 'The second number should be different of zero';
        expect(math.divide(numberOne, numberTwo)).toEqual(result);
    });
})