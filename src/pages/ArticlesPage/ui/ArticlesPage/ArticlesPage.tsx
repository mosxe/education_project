import { ArticleList } from 'entities/Article';
import { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { useSelector } from 'react-redux';
import {
  getArtcilesPageIsLoading,
  getArtcilesPageError,
  getArtcilesPageView
} from '../../model/selectors/articlesPageSelectors';
import { Page } from 'shared/ui/Page';
import { Text, TextTheme } from 'shared/ui/Text';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import cls from './ArticlesPage.module.scss';
import { useSearchParams } from 'react-router-dom';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
};

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArtcilesPageIsLoading);
  const isError = useSelector(getArtcilesPageError);
  const view = useSelector(getArtcilesPageView);
  const [searchParams] = useSearchParams();

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  if (isError) {
    return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
        <Page
          className={classNames('', {}, [className])}
        >
          <Text text="Ошибка при загрузке статей" align='center' theme={TextTheme.ERROR} />
        </Page>
      </DynamicModuleLoader>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        onScrollEnd={onLoadNextPart}
        className={classNames('', {}, [className])}
      >
        <ArticlesPageFilters />
        <ArticleList
          isLoading={isLoading}
          view={view}
          articles={articles}
          className={cls.list}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;