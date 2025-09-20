import { validateProfileData } from './validateProfileData';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileError } from '../../types/profile';

const data = {
  username: 'mosxe',
  first: 'Кирилл',
  age: 33,
  city: 'Москва',
  lastname: 'test',
  currency: Currency.RUB,
  country: Country.Russian
};

describe('validateProfileData.test', () => {
  test('success', async () => {
    const result = validateProfileData(data);
    expect(result).toEqual([]);
  });

  test('without firstname and lastname', () => {
    const result = validateProfileData({ ...data, first: '', lastname: '' });
    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('incorrect age', () => {
    const result = validateProfileData({ ...data, age: undefined });
    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('incorrect all', () => {
    const result = validateProfileData({});
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY
    ]);
  });
});