import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { ArticleView } from '../../model/consts/consts';
import { Skeleton } from 'shared/ui/Skeleton';
import { Card } from 'shared/ui/Card';
import { VStack, HStack } from 'shared/ui/Stack';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = (
  props
) => {
  const { className, view } = props;
  if (view === ArticleView.BIG) {
    return (
      <Card>
        <VStack max gap='16' className={classNames(cls[view], {}, [className])}>
          <HStack gap='8'>
            <Skeleton width={32} height={32} border='50%' />
            <Skeleton width={150} height={16} />
            <Skeleton width={150} height={16} />
          </HStack>
          <Skeleton width={250} height={24} />
          <Skeleton width={250} height={16} />
          <Skeleton height={250} width='100%' />
          <Skeleton width='100%' height={24} />
          <Skeleton width='100%' height={24} />
          <HStack
            max
            gap='8'
            align='center'
            justify='between'
            className={cls.footer}
          >
            <Skeleton width={100} height={24} />
            <Skeleton width={100} height={24} />
          </HStack>
        </VStack>
      </Card>
    );
  }

  return (
    <VStack className={classNames(cls[view], {}, [className])}>
      <Card className={cls.card} border='round'>
        <Skeleton width='100%' height={140} />
        <VStack className={cls.info} gap='4'>
          <Skeleton width='100%' height={72} />
          <VStack gap='4' className={cls.footer} max>
            <HStack justify='between' max gap='4'>
              <Skeleton width='40%' height={24} />
              <Skeleton width='40%' height={24} />
            </HStack>
            <HStack gap='4'>
              <Skeleton width={60} height={32} border='100%' />
              <Skeleton width='100%' height={24} />
            </HStack>
          </VStack>
        </VStack>
      </Card>
    </VStack>
  );
};
