import { ProfileSchema } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data = {
  username: 'mosxe',
  first: 'Кирилл',
  age: 33,
  city: 'Москва',
  lastname: 'test',
  currency: Currency.RUB,
  country: Country.Russian
};

describe('profileSlice.test', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({ readonly: true });
  });

  test('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
      readonly: true,
      validateErrors: undefined,
      data,
      form: data
    });
  });

  test('test update profile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: '' } };
    expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ username: 'test' }))).toEqual({
      form: { username: 'test' }
    });
  });

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = { isLoading: false, error: 'error' };
    expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
      isLoading: true, error: undefined
    });
  });

  test('test update profile service fullfiled', () => {
    const state: DeepPartial<ProfileSchema> = { isLoading: true };
    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ''))).toEqual({
      isLoading: false, readonly: true, validateErrors: undefined, form: data, data
    });
  });
});