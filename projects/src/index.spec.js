///////1-е задание//////////////////
function returnFirstArgument(arg) {
  return arg;
}

test('returnFirstArgument должна вернуть 10', () => {
  expect(returnFirstArgument(10)).toBe(10);
});

test('returnFirstArgument должна вернуть привет мир', () => {
  expect(returnFirstArgument('привет, мир')).toBe('привет, мир');
});

///////2-е задание//////////////////
function sumWithDefaults(a, b) {
  return a + b;
}

test('sumWithDefaults должна вернуть результат 7', () => {
  expect(sumWithDefaults(5, 2)).toBe(7);
});

///////3-е задание//////////////////
function returnFnResult(fn) {
  return fn();
}

test('returnFnResult должна вернуть результат Bye!!!', () => {
  expect(
    returnFnResult(function () {
      return 'Bye!!!';
    })
  ).toBe('Bye!!!');
});

///////4-е задание//////////////////
function returnCounter(numberOuter) {
  return function (numberInner) {
    return numberOuter + numberInner;
  };
}

// console.log(plus(5));

test('returnCounter должна вернуть 2', () => {
  const F = returnCounter(1);
  expect(F(1)).toBe(2);
});

///////5-е задание//////////////////

function returnArgumentsArray() {
  const array = [];
  for (let i = 0; i < arguments.length; i++) {
    array.push(arguments[i]);
  }
  return array;
}

test('returnArgumentsArray должна вернуть массив переданных аргументов', () => {
  expect(returnArgumentsArray(1, [], 3, {})).toStrictEqual([1, [], 3, {}]);
});

///////6-е задание//////////////////
function bindFunction(fn, a, b) {
  return fn(a, b);
}

function sum(a, b) {
  return a + b;
}

test('bindFunction должна вернуть 6', () => {
  expect(bindFunction(sum, 2, 4)).toBe(6);
});
