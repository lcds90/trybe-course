const { myRemove, myRemoveWithoutCopy, myFizzBuzz } = require('./index.js');

// SECTION Refatorando Testes Unitários

describe('My remove tests', () => {
  it('should return the array correctly', () => {
    const arr = [1, 2, 3, 4];
    // TODO Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
    expect(myRemove(arr, 3)).toStrictEqual([1, 2, 4]);
    // TODO Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
    expect(myRemove(arr, 3)).not.toStrictEqual([1, 2, 3, 4]);
    // TODO Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
    expect(myRemove([1, 2, 3, 4, 5], 5)).toStrictEqual([1, 2, 3, 4]);
  });

  it('should not modify array', () => {
    const arr = [1, 2, 3];
    // TODO Verifique se o array passado por parâmetro não sofreu alterações
    expect(myRemove(arr)).toStrictEqual(arr);
  });
});

describe('myRemoveWithoutCopy tests', () => {
  it('should return the array correctly', () => {
    // TODO Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);

    // TODO Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toStrictEqual([
      1, 2, 3, 4,
    ]);

    //  TODO Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4]);
  });
  it('should not modify array', () => {
    // TODO Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
    const arr = [1, 2, 3, 4];
    const result = myRemoveWithoutCopy(arr);
    expect(result).toEqual(arr);
  });
});

describe('myFizzBuzz tests', () => {
  it('should return fizz', () => {
    expect(myFizzBuzz(3)).toStrictEqual('fizz');
    expect(myFizzBuzz(6)).toStrictEqual('fizz');
    expect(myFizzBuzz(9)).toStrictEqual('fizz');
    expect(myFizzBuzz(12)).toStrictEqual('fizz');
    expect(typeof myFizzBuzz(12)).toStrictEqual('string');
  });
  it('should return buzz', () => {
    expect(myFizzBuzz(5)).toStrictEqual('buzz');
    expect(myFizzBuzz(10)).toStrictEqual('buzz');
    expect(myFizzBuzz(20)).toStrictEqual('buzz');
    expect(typeof myFizzBuzz(20)).toStrictEqual('string');
  });
  it('should return fizzbuzz', () => {
    expect(myFizzBuzz(15)).toStrictEqual('fizzbuzz');
    expect(myFizzBuzz(30)).toStrictEqual('fizzbuzz');
    expect(myFizzBuzz(45)).toStrictEqual('fizzbuzz');
    expect(myFizzBuzz(60)).toStrictEqual('fizzbuzz');
    expect(typeof myFizzBuzz(60)).toStrictEqual('string');
  });
  it('should return number', () => {
    expect(myFizzBuzz(2)).toStrictEqual(2);
    expect(myFizzBuzz(4)).toStrictEqual(4);
    expect(myFizzBuzz(7)).toStrictEqual(7);
    expect(typeof myFizzBuzz(7)).toStrictEqual('number');
  });
  it('should return false when passing a string', () => {
    expect(myFizzBuzz('trying')).toStrictEqual(false);
    expect(myFizzBuzz('to pass')).toStrictEqual(false);
    expect(myFizzBuzz('string')).toStrictEqual(false);
    expect(typeof myFizzBuzz('string')).toStrictEqual('boolean');
  });
});

describe('Object tests', () => {
  const obj1 = {
    title: 'My Title',
    description: 'My Description',
  };

  const obj2 = {
    description: 'My Description',
    title: 'My Title',
  };

  const obj3 = {
    title: 'My Different Title',
    description: 'My Description',
  };

  it('should have the same properties', () => {
    expect(obj1).toHaveProperty('title');
    expect(obj1).toHaveProperty('description');
    expect(obj2).toHaveProperty('title');
    expect(obj2).toHaveProperty('description');
    expect(obj3).toHaveProperty('title');
    expect(obj3).toHaveProperty('description');
  });

  it('should match object values', () => {
    expect(obj1).toStrictEqual(obj2);
    expect(obj2).toStrictEqual(obj1);
  });

  it('should not match object values', () => {
    expect(obj1).not.toStrictEqual(obj3);
    expect(obj2).not.toStrictEqual(obj3);
  });
});

// !SECTION
