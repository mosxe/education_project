import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text';
import cls from './ArticleDetailsPage.module.scss';
import {
  DynamicModuleLoader,
  ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsPageReducer } from '../../model/slice';
import { Page } from 'shared/ui/Page';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleRecommendationsList } from 'features/articleRecommendationsList';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleRating } from 'features/articleRating';
import { getFeatureFlags } from 'shared/lib/features';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();
  const isArticleRatingEnabled = getFeatureFlags('isArticleRatingEnabled');

  if (id === undefined) {
    return (
      <div className={classNames('', {}, [className])}>
        <Text text='Статья не найдена' />
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames('', {}, [className])}>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        {isArticleRatingEnabled && (
          <ArticleRating articleId={id} className={cls.commentTitle} />
        )}
        <ArticleRecommendationsList className={cls.commentTitle} />
        <ArticleDetailsComments id={id} className={cls.commentTitle} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
