import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleList } from 'entities/Article';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList: FC<ArticleRecommendationsListProps> = (
  props
) => {
  const { className } = props;
  const { t } = useTranslation('article-details');
  const {
    data: articles,
    isLoading,
    isError
  } = useArticleRecommendationsList(3);

  if (isLoading || isError || !articles) {
    return null;
  }

  return (
    <VStack
      gap='16'
      className={classNames('', {}, [className])}
      data-testid='ArticleRecommendationsList'
    >
      <Text size='l' title={t('Рекомендуем')} />
      <ArticleList articles={articles} target='_blank' />
    </VStack>
  );
};
