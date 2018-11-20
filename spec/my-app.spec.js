var math = require("../my-app");
describe("Math features", () => {
    
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

        it('case one', () => {
            numberOne = -1;
            expect(math.add(numberOne, numberTwo)).toEqual(2);
        });
    })
    
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

        it('case one', () => {
            numberOne = -1;
            expect(math.subtract(numberOne, numberTwo)).toEqual(-4);
        });
    })

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

        it('case one', () => {
            numberTwo = 10;
            expect(math.multiply(numberOne, numberTwo)).toEqual(50);
        });
    })

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

        it('case one', () => {
            numberOne = 10;
            numberTwo = 2;
            expect(math.divide(numberOne, numberTwo)).toEqual(5);
        });
    })
});