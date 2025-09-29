import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentList.module.scss';
import { Comment } from '../../model/types/comment';
import { useTranslation } from 'react-i18next';
import { CommentCard } from '../CommentCard/CommentCard';
import { Text } from 'shared/ui/Text';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading: boolean;
}

export const CommentList: FC<CommentListProps> = (props) => {
  const { comments, isLoading, className } = props;
  const { t } = useTranslation();


  if (isLoading) {
    return (
      <div className={classNames(cls.CommentList, {}, [className])}>
        <CommentCard
          className={cls.comment}
          isLoading={true} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {
        comments?.length ? comments.map(comment =>
          <CommentCard
            className={cls.comment}
            key={comment.id}
            comment={comment}
            isLoading={isLoading} />)
          : <Text text={t('Комментарии отсутствуют')} />
      }
    </div>
  );
};