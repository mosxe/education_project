import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('somecClass')).toBe('somecClass');
  });

  test('with additional class', () => {
    expect(classNames('somecClass', {}, ['someClass2 someClass3'])).toBe('somecClass someClass2 someClass3');
  });

  test('with mods', () => {
    expect(classNames('somecClass', { testClass: true, noClass: false }, ['someClass2 someClass3'])).toBe('somecClass someClass2 someClass3 testClass');
  });
});