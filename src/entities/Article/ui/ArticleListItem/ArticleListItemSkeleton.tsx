import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { ArticleView } from '../../model/types/article';
import { Skeleton } from 'shared/ui/Skeleton';
import { Card } from 'shared/ui/Card';
import { VStack } from 'shared/ui/Stack';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = (props) => {
  const { className, view } = props;
  if (view === ArticleView.BIG) {
    return (
      <Card>
        <VStack max gap='8' className={classNames('', {}, [className, cls[view]])}>
          <Skeleton width={30} height={30} border='50%' />
          <Skeleton width={150} height={16} className={cls.username} />
          <Skeleton width={150} height={16} className={cls.date} />
          <Skeleton width={250} height={24} className={cls.title} />
          <Skeleton height={200} className={cls.img} />
          <div className={cls.footer}>
            <Skeleton width={200} height={36} />
          </div>
        </VStack>
      </Card>
    );
  }

  return (
    <VStack className={classNames('', {}, [className, cls[view]])}>
      <Card>
        <div className={cls.imageWrapper}>
          <Skeleton width={200} height={200} />
        </div>
        <div className={cls.infoWrapper}>
          <Skeleton width={130} height={16} />
        </div>
        <div className={cls.infoWrapper}>
          <Skeleton width={130} height={16} />
        </div>
      </Card >
    </VStack >
  );
};