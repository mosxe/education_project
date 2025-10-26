import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArtcilesPageLimit } from '../../selectors/articlesPageSelectors';

interface fetchArticleListProps {
  page?: number;
};

export const fetchArticleList = createAsyncThunk<Article[], fetchArticleListProps, ThunkConfig<string>>(
  'articlesPage/fetchArticleList',
  async (props, thunkApi) => {
    const { rejectWithValue, extra, getState } = thunkApi;
    const { page = 1 } = props;
    const limit = getArtcilesPageLimit(getState());

    try {
      const response = await extra.api.get<Article[]>('/articles/', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page
        }
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (_) {
      return rejectWithValue('error');
    }
  },
);