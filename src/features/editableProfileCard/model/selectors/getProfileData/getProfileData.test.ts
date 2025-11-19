import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileData } from './getProfileData';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

describe('getProfileData.test', () => {
  test('should work with filled state', () => {
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
        data
      }
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});