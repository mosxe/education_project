import { fetchArticleList } from '../fetchArticleList/fetchArticleList';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

jest.mock('../fetchArticleList/fetchArticleList');

describe('fetchNextArticlesPage.test', () => {
  test('success', async () => {
    const thunk = TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        entities: {},
        page: 2,
        limit: 5,
        ids: [],
        isLoading: false,
        hasMore: true
      }
    });

    await thunk.callThunk();
    expect(thunk.dispatch).toHaveBeenCalledTimes(4);
    expect(fetchArticleList).toHaveBeenCalled();
  });
  test('fetchArticleList not called', async () => {
    const thunk = TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        entities: {},
        page: 2,
        limit: 5,
        ids: [],
        isLoading: false,
        hasMore: false
      }
    });

    await thunk.callThunk();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticleList).not.toHaveBeenCalled();
  });
});