import { useCallback } from 'react';
import {
  getArtcilesPageView,
  getArtcilesPageOrder,
  getArtcilesPageSort,
  getArtcilesPageSearch,
  getArtcilesPageType
} from '../../model/selectors/articlesPageSelectors';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ArticleSortField, ArticleType, ArticleView } from 'entities/Article';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';
import { SortOrder } from 'shared/types/sort';
import { fetchArticleList } from '../../model/services/fetchArticleList/fetchArticleList';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';

export const useArticleFilters = () => {
  const dispatch = useAppDispatch();
  const view = useSelector(getArtcilesPageView);
  const order = useSelector(getArtcilesPageOrder);
  const sort = useSelector(getArtcilesPageSort);
  const search = useSelector(getArtcilesPageSearch);
  const type = useSelector(getArtcilesPageType);

  const fetchData = useCallback(() => {
    dispatch(fetchArticleList({ replace: true }));
  }, [dispatch]);

  const debounceFetchData = useDebounce(fetchData, 500);

  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(articlesPageActions.setOrder(newOrder));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData]
  );

  const onChangeSort = useCallback(
    (newSort: ArticleSortField) => {
      dispatch(articlesPageActions.setSort(newSort));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData]
  );

  const onChangeSearch = useCallback(
    (search: string) => {
      dispatch(articlesPageActions.setSearch(search));
      dispatch(articlesPageActions.setPage(1));
      debounceFetchData();
    },
    [dispatch, debounceFetchData]
  );

  const onChangeType = useCallback(
    (value: ArticleType) => {
      dispatch(articlesPageActions.setType(value));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData]
  );

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch]
  );

  return {
    onChangeOrder,
    onChangeSort,
    onChangeSearch,
    onChangeType,
    onChangeView,
    view,
    order,
    sort,
    search,
    type
  };
};
