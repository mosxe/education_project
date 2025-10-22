import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}


const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.SMALL ? 9 : 3).fill(0).map((item, index) => <ArticleListItemSkeleton key={index} view={view} />);
};

export const ArticleList: FC<ArticleListProps> = (props) => {
  const { className, articles, isLoading, view = ArticleView.SMALL } = props;

  const renderArticle = (article: Article) => {
    return <ArticleListItem article={article} view={view} key={article.id} />;
  };

  if (isLoading) {
    return (
      <div className={classNames('', {}, [className, cls[view]])}>
        {getSkeletons(view)}
      </div>
    );
  }

  return (
    <div className={classNames('', {}, [className, cls[view]])}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
    </div>
  );
};