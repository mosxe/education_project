import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList } from 'entities/Article';
import {
  getArtcilesPageIsLoading,
  getArtcilesPageView,
  getArtcilesPageError
} from '../../model/selectors/articlesPageSelectors';
import { getArticles } from '../../model/slices/articlesPageSlice';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList: FC<ArticleInfiniteListProps> = (props) => {
  const { className } = props;
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArtcilesPageIsLoading);
  const view = useSelector(getArtcilesPageView);
  const isError = useSelector(getArtcilesPageError);
  const { t } = useTranslation();

  if (isError) {
    return (
      <Text
        text={t('Ошибка при загрузке статей')}
        align='center'
        variant='error'
      />
    );
  }

  return (
    <div className={classNames('', {}, [className])}>
      <ArticleList isLoading={isLoading} view={view} articles={articles} />
    </div>
  );
};
