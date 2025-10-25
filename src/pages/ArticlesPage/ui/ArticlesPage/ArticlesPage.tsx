import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageReducer, getArticles, articlesPageActions } from '../../model/slices/articlesPageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchArticleList } from '../../model/services/fetchArticleList/fetchArticleList';
import { useSelector } from 'react-redux';
import {
  getArtcilesPageIsLoading,
  // getArtcilesPageError,
  getArtcilesPageView
} from '../../model/selectors/articlesPageSelectors';

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
  // const isError = useSelector(getArtcilesPageError);
  const view = useSelector(getArtcilesPageView);

  useInitialEffect(() => {
    dispatch(fetchArticleList());
    dispatch(articlesPageActions.initState());
  });

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames('', {}, [className])}>
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList
          isLoading={isLoading}
          view={view}
          articles={articles} />
      </div>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;