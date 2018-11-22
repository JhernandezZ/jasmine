const comparer = (x, y) => x > y;

const add = (x, y) => x + y;

const subtract = (x, y) => x - y;

const multiply = (x, y) => x * y;

const divide = (x, y) => {
    if (y === 0) return 'The second number should be different of zero';
    return x / y;
}

module.exports = {
    add : add,
    comparer: comparer,
    subtract : subtract,
    multiply : multiply,
    divide : divide,
};
