import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article, ArticleType } from 'entities/Article';
import {
  getArtcilesPageLimit,
  getArtcilesPageOrder,
  getArtcilesPageSort,
  getArtcilesPageSearch,
  getArtcilesPageNum,
  getArtcilesPageType
} from '../../selectors/articlesPageSelectors';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';

interface fetchArticleListProps {
  replace?: boolean;
}

export const fetchArticleList = createAsyncThunk<Article[], fetchArticleListProps, ThunkConfig<string>>(
  'articlesPage/fetchArticleList',
  async (props, thunkApi) => {
    const { rejectWithValue, extra, getState } = thunkApi;
    const limit = getArtcilesPageLimit(getState());
    const page = getArtcilesPageNum(getState());
    const order = getArtcilesPageOrder(getState());
    const sort = getArtcilesPageSort(getState());
    const search = getArtcilesPageSearch(getState());
    const type = getArtcilesPageType(getState());

    try {
      addQueryParams({
        sort, order, search, type
      });

      const response = await extra.api.get<Article[]>('/articles/', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
          _sort: sort,
          _order: order,
          q: search,
          type_like: type === ArticleType.ALL ? undefined : type
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