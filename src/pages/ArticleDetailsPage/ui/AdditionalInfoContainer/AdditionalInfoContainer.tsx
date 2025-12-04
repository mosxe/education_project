import { useCallback } from 'react';
import { ArticleAdditionalInfo } from 'widgets/ArticleAdditionalInfo';
import { Card } from 'shared/ui/Card';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/Article';
import { getRouteArticleEdit } from 'shared/const/router';
import { useNavigate } from 'react-router-dom';
import cls from './AdditionalInfoContainer.module.scss';

export const AdditionalInfoContainer = () => {
  const article = useSelector(getArticleDetailsData);
  const navigate = useNavigate();

  const onEditArticle = useCallback(() => {
    navigate(getRouteArticleEdit(article?.id ?? ''));
  }, [navigate, article?.id]);

  if (!article) {
    return null;
  }

  return (
    <Card padding='24' border='round' className={cls.card}>
      <ArticleAdditionalInfo
        author={article.user}
        createdAt={article.createdAt}
        views={article.views}
        onEdit={onEditArticle}
      />
    </Card>
  );
};
