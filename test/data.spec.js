import { example, anotherExample } from '../src/data.js';


describe('example', () => {
  it('filter example', () => {
    // GIVEN - DADO
    const arrayMock = [
      {a: true},
      {a: false},
    ]
    
    // WHEN - CUANDO
    const filteredArray = example(arrayMock)

    // ENTONCES - ENTONCES
    expect(filteredArray.length).toBe(1)
    expect(filteredArray).toEqual([{a: true}])
  })
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
