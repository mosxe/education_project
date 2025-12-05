import { FC, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';
import {
  DynamicModuleLoader,
  ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading
} from '../../model/selectors/articleDetails';
import { Text } from 'shared/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton';
import { VStack } from 'shared/ui/Stack';
import { renderArticleBlock } from './renderArticleBlock';
import { AppImage } from 'shared/ui/AppImage';

interface ArticleDetailsProps {
  id: string;
  className?: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer
};

export const ArticleDetails: FC<ArticleDetailsProps> = (props) => {
  const { id, className } = props;
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton width='50%' height={32} />
        <Skeleton width='75%' height={32} />
        <Skeleton width='100%' height={420} />
        <Skeleton width={300} height={32} />
        <Skeleton width={600} height={24} />
        <Skeleton width='100%' height={200} />
        <Skeleton width='100%' height={200} />
      </>
    );
  } else if (error) {
    content = <Text title='Статья не найдена' align='center' />;
  } else {
    content = (
      <>
        <Text title={article?.title} bold size='l' />
        <Text title={article?.subtitle} />
        <AppImage
          src={article?.img}
          fallback={<Skeleton width='100%' height={420} border='16px' />}
          height={420}
          alt='Картинка'
          className={cls.img}
        />
        {article?.blocks.map(renderArticleBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
      <VStack
        gap='16'
        className={classNames(cls.ArticleDetails, {}, [className])}
      >
        {content}
      </VStack>
    </DynamicModuleLoader>
  );
};
