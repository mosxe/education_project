import { FC, HTMLAttributeAnchorTarget } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Text } from 'shared/ui/Text';
import { ArticleView } from '../../model/consts/consts';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => <ArticleListItemSkeleton key={index} view={view} />);
};

export const ArticleList: FC<ArticleListProps> = (props) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.SMALL,
    target = '_self'
  } = props;

  const renderArticle = (article: Article) => {
    return (
      <ArticleListItem
        article={article}
        view={view}
        key={article.id}
        target={target}
      />
    );
  };

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames('', {}, [className, cls[view]])}>
        <Text size='l' text='Статьи не найдены' align='center' />
      </div>
    );
  }

  return (
    <div
      data-testid='ArticleList'
      className={classNames(cls.ArticleList, {}, [className, cls[view]])}
    >
      {articles.length > 0 ? articles.map(renderArticle) : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
};
