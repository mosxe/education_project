import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageReducer, getArticles, articlesPageActions } from '../../model/slices/articlesPageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchArticleList } from '../../model/services/fetchArticleList/fetchArticleList';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { useSelector } from 'react-redux';
import {
  getArtcilesPageIsLoading,
  getArtcilesPageNum,
  getArtcilesPageError,
  getArtcilesPageView
} from '../../model/selectors/articlesPageSelectors';
import { Page } from 'shared/ui/Page';
import { Text, TextTheme } from 'shared/ui/Text';

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
  const page = useSelector(getArtcilesPageNum);

  useInitialEffect(() => {
    dispatch(articlesPageActions.initState());
    dispatch(fetchArticleList({
      page
    }));
  });

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  }, [dispatch]);

  if (isError) {
    return (
      <DynamicModuleLoader reducers={reducers}>
        <Page
          className={classNames('', {}, [className])}
        >
          <Text text="Ошибка при загрузке статей" align='center' theme={TextTheme.ERROR} />
        </Page>
      </DynamicModuleLoader>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page
        onScrollEnd={onLoadNextPart}
        className={classNames('', {}, [className])}
      >
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList
          isLoading={isLoading}
          view={view}
          articles={articles} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;