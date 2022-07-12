const {
  stringLength,
  reverseString,
  Calculator,
  capitalize,
} = require('./practice');

test('counts letters in string', () => {
  expect(stringLength('welcome')).toBe(7);
});

test('throws an error if string character count isnt between 0 and 10', () => {
  const string = 'welcometomyhome';
  const result = () => {
    stringLength(string);
  };
  expect(result).toThrow(Error);
});

test('should return reversed string', () => {
  expect(reverseString('welcome')).toBe(reverseString('welcome'));
});

describe('add', () => {
  test('1 + 3 should return 4', () => {
    const num1 = 1;
    const num2 = 3;
    const calculator = new Calculator(num1, num2);
    const result = calculator.add();
    expect(result).toBe(4);
  });

  test('4 + 5 should return 9', () => {
    const num1 = 4;
    const num2 = 5;
    const calculator = new Calculator(num1, num2);
    const result = calculator.add();
    expect(result).toBe(9);
  });

  test('6 + 4 should return 10', () => {
    const num1 = 6;
    const num2 = 4;
    const calculator = new Calculator(num1, num2);
    const result = calculator.add();
    expect(result).toBe(10);
  });
});

describe('subtract', () => {
  test('2 - 1 should return 1', () => {
    const num1 = 2;
    const num2 = 1;

    const calculator = new Calculator(num1, num2);
    const result = calculator.subtract();

    expect(result).toBe(1);
  });

  test('4 - 2 should return 2', () => {
    const num1 = 4;
    const num2 = 2;

    const calculator = new Calculator(num1, num2);
    const result = calculator.subtract();

    expect(result).toBe(2);
  });

  test('10 - 3 should return 7', () => {
    const num1 = 10;
    const num2 = 3;

    const calculator = new Calculator(num1, num2);
    const result = calculator.subtract();

    expect(result).toBe(7);
  });
});

describe('multiply', () => {
  test(' 2 * 3 should return 6', () => {
    const num1 = 2;
    const num2 = 3;
    const calculator = new Calculator(num1, num2);
    const result = calculator.multiply();
    expect(result).toBe(6);
  });

  test(' 5 * 3 should return 15', () => {
    const num1 = 5;
    const num2 = 3;
    const calculator = new Calculator(num1, num2);
    const result = calculator.multiply();
    expect(result).toBe(15);
  });

  test(' 6 * 4 should return 24', () => {
    const num1 = 6;
    const num2 = 4;
    const calculator = new Calculator(num1, num2);
    const result = calculator.multiply();
    expect(result).toBe(24);
  });
});

describe('divide', () => {
  test(' 4 / 2 should return 2', () => {
    const num1 = 4;
    const num2 = 2;
    const calculator = new Calculator(num1, num2);
    const result = calculator.divide();
    expect(result).toBe(2);
  });

  test(' 5 / 5 should return 1', () => {
    const num1 = 5;
    const num2 = 5;
    const calculator = new Calculator(num1, num2);
    const result = calculator.divide();
    expect(result).toBe(1);
  });

  test(' 6 / 3 should return 2', () => {
    const num1 = 6;
    const num2 = 3;
    const calculator = new Calculator(num1, num2);
    const result = calculator.divide();
    expect(result).toBe(2);
  });
});

test('first letter should return capitalized', () => {
  //arrange
  const string = 'welcome';
  //act
  const result = string[0].toUpperCase();
  //assert
  expect(result).toBe('W');
});
