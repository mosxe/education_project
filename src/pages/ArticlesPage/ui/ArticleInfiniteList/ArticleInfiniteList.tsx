import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList } from 'entities/Article';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSearchParams } from 'react-router-dom';
import {
  getArtcilesPageIsLoading,
  getArtcilesPageView,
  getArtcilesPageError
} from '../../model/selectors/articlesPageSelectors';
import { getArticles } from '../../model/slices/articlesPageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList: FC<ArticleInfiniteListProps> = (props) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArtcilesPageIsLoading);
  const view = useSelector(getArtcilesPageView);
  const isError = useSelector(getArtcilesPageError);
  const [searchParams] = useSearchParams();
  const { t } = useTranslation();

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  if (isError) {
    return <Text text="Ошибка при загрузке статей" align='center' theme={TextTheme.ERROR} />;
  }

  return (
    <div className={classNames('', {}, [className])}>
      <ArticleList
        isLoading={isLoading}
        view={view}
        articles={articles}
      />
    </div>
  );
};