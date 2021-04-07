import Validator from '../app';

test('correct name', () => {
  // const user = new Validator()
  expect(new Validator('abc-1_abc').validateUsername()).toBe(true);
});

test('the first symbol is a number', () => {
  // const user = new Validator()
  expect(new Validator('1abc').validateUsername()).toBe(false);
});

test('the last symbol is a number', () => {
  // const user = new Validator()
  expect(new Validator('abc1').validateUsername()).toBe(false);
});

test('4 numbers in a row', () => {
  // const user = new Validator()
  expect(new Validator('abc1234abc').validateUsername()).toBe(false);
});

test('invalid symbols', () => {
  // const user = new Validator()
  expect(new Validator('abc%abc').validateUsername()).toBe(false);
});

test('invalid symbols', () => {
  // const user = new Validator()
  expect(new Validator('abc.abc').validateUsername()).toBe(false);
});

test('invalid symbols', () => {
  // const user = new Validator()
  expect(new Validator('_abcabc').validateUsername()).toBe(false);
});

test('invalid symbols', () => {
  // const user = new Validator()
  expect(new Validator('-abcabc').validateUsername()).toBe(false);
});

test('invalid symbols', () => {
  // const user = new Validator()
  expect(new Validator('abcabc ').validateUsername()).toBe(false);
});

test('invalid symbols', () => {
  // const user = new Validator()
  expect(new Validator('abcabc_').validateUsername()).toBe(false);
});

test('invalid symbols', () => {
  // const user = new Validator()
  expect(new Validator('abcabc-').validateUsername()).toBe(false);
});
