import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsData, getArticleDetailsIsLoading, getArticleDetailsError } from './articleDetails';


describe('articleDetails.test', () => {
  test('should work with filled state', () => {
    const data = {
      id: '1',
      title: 'title'
    };
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data
      }
    };
    expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
  });

  test('return data undefined', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
  });


  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'error'
      }
    };
    expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
  });

  test('should loading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true
      }
    };
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
  });
});