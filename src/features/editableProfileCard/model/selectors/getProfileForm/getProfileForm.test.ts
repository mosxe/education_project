import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

describe('getProfileForm.test', () => {
  test('should work with form state', () => {
    const data = {
      username: 'mosxe',
      first: 'Кирилл',
      age: 33,
      city: 'Москва',
      lastname: 'test',
      currency: Currency.RUB,
      country: Country.Russian
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: data
      }
    };
    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});