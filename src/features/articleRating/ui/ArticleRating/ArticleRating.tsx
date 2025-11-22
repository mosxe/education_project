import { FC, useCallback } from 'react';
import { RatingCard } from 'entities/Rating';
import { useTranslation } from 'react-i18next';
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { Skeleton } from 'shared/ui/Skeleton';

export interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

const ArticleRating: FC<ArticleRatingProps> = (props) => {
  const { className, articleId } = props;
  const { t } = useTranslation();
  const userData = useSelector(getUserAuthData);
  const userId = userData?.id ?? '';
  const { data, isLoading } = useGetArticleRating({ articleId, userId });
  const [rateArticleMutation] = useRateArticle();

  const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
    rateArticleMutation({ articleId, userId, rate: starsCount, feedback });
  }, [articleId, userId, rateArticleMutation]);

  const onAccept = useCallback((starsCount: number, feedback?: string) => {
    handleRateArticle(starsCount, feedback);
  }, [handleRateArticle]);

  const onCancel = useCallback((starsCount: number) => {
    handleRateArticle(starsCount);
  }, [handleRateArticle]);

  if (isLoading) {
    return <Skeleton className={className} width='100%' height={120} />;
  }

  const rating = data?.[0];



  return (
    <RatingCard
      className={className}
      title={t('Оцените статью')}
      feedbackTitle={t('Оставьте свой отзыв о статье, это поможет улучшить качество')}
      hasFeedback
      rate={rating?.rate}
      onAccept={onAccept}
      onCancel={onCancel}
    />
  );
};

export default ArticleRating;