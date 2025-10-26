import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArtcilesPageHasMore, getArtcilesPageIsLoading, getArtcilesPageNum } from '../../selectors/articlesPageSelectors';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';
import { articlesPageActions } from '../../slices/articlesPageSlice';

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPage/fetchNextArticlesPage',
  async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const hasMore = getArtcilesPageHasMore(getState());
    const page = getArtcilesPageNum(getState());
    const isLoading = getArtcilesPageIsLoading(getState());

    if (hasMore && !isLoading) {
      dispatch(articlesPageActions.setPage(page + 1));
      dispatch(fetchArticleList({
        page: page + 1
      }));
    }
  },
);