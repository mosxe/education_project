import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';
import { DeepPartial } from '@reduxjs/toolkit';

describe('getLoginUsername.test', () => {
  test('should isLoading true', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: '123'
      }
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('123');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});