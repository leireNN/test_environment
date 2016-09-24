const foo = require('../src/foo');
const test = require('tape');

/*
Primero que falle.
*/
test('Should return foo', (t) => {
  const actual = foo();
  const expected = 'foo';

  t.equal(actual, expected);
  t.end();
});

test('Should return bar if the number is positive', (t) => {
  const actual = foo(5);
  const expected = 'bar';

  t.equal(actual, expected);
  t.end();
});

test('Should return biz if the number is negative', (t) => {
  const actual = foo(-1);
  const expected = 'biz';

  t.equal(actual, expected);
  t.end();
});
