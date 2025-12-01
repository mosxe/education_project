import { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageReducer } from '../../model/slices/articlesPageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { Page } from 'shared/ui/Page';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { ArticlePageGreeting } from 'features/articlePageGreeting';
import { StickyContentLayout } from 'shared/layouts/StickyContentLayout';
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer';
import { FiltersContainer } from '../FiltersContainer/FiltersContainer';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
};

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const { className } = props;
  const dispatch = useAppDispatch();

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <StickyContentLayout
        left={<ViewSelectorContainer />}
        content={
          <Page
            data-testid='ArticlesPage'
            onScrollEnd={onLoadNextPart}
            className={classNames('', {}, [className])}
          >
            <ArticleInfiniteList />
            <ArticlePageGreeting />
          </Page>
        }
        right={<FiltersContainer />}
      />
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
