import { rtkApi } from 'shared/api/rtkApi';
import { JsonSettings } from '../types/jsonSettings';
import { User } from '../types/user';

interface SetJsonSettingsArg {
  userId: string;
  jsonSettings: JsonSettings;
}

const userApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    setJsonSettings: build.mutation<User, SetJsonSettingsArg>({
      query: ({ userId, jsonSettings }) => ({
        method: 'PATCH',
        url: `/users/${userId}`,
        body: {
          jsonSettings
        }
      })
    })
  })
});

export const setJsonSettingsMutation =
  userApi.endpoints.setJsonSettings.initiate;
