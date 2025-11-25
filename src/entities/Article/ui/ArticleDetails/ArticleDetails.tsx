import { FC, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
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
import { Avatar } from 'shared/ui/Avatar';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { Icon } from 'shared/ui/Icon';
import { ArticleBlock } from '../../model/types/article';
import { ArticleBlockType } from '../../model/consts/consts';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { HStack, VStack } from 'shared/ui/Stack';

interface ArticleDetailsProps {
  id: string;
  className?: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer
};

const renderBlock = (block: ArticleBlock) => {
  switch (block.type) {
    case ArticleBlockType.CODE:
      return <ArticleCodeBlockComponent key={block.id} block={block} className={cls.block} />;
    case ArticleBlockType.TEXT:
      return <ArticleTextBlockComponent key={block.id} block={block} className={cls.block} />;
    case ArticleBlockType.IMAGE:
      return <ArticleImageBlockComponent key={block.id} block={block} className={cls.block} />;
    default:
      return null;
  }
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
    content = <>
      <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
      <Skeleton className={cls.title} width={300} height={32} />
      <Skeleton className={cls.skeleton} width={600} height={24} />
      <Skeleton className={cls.skeleton} width="100%" height={200} />
      <Skeleton className={cls.skeleton} width="100%" height={200} />
    </>;
  } else if (error) {
    content = <Text title='Статья не найдена' align='center' />;
  } else {
    content = <>
      <HStack justify='center' align='center' max className={cls.avatarWrapper}>
        <Avatar src={article?.img} size={200} className={cls.avatar} />
      </HStack>
      <VStack gap='4' max data-testid="ArticleDetails.Info">
        <Text
          title={article?.title}
          text={article?.subtitle}
          className={cls.title}
          size='l'
        />
        <HStack gap="8" >
          <Icon Svg={EyeIcon} />
          <Text text={String(article?.views)} />
        </HStack>
        <HStack gap="8" >
          <Icon Svg={CalendarIcon} />
          <Text text={article?.createdAt} />
        </HStack>
      </VStack>
      {
        article?.blocks.map(renderBlock)
      }
    </>;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
      <VStack gap='16' className={classNames(cls.ArticleDetails, {}, [className])}>
        {content}
      </VStack>
    </DynamicModuleLoader>
  );
};