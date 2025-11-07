import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Comment } from '../../model/types/comment';
import { useTranslation } from 'react-i18next';
import { CommentCard } from '../CommentCard/CommentCard';
import { Text } from 'shared/ui/Text';
import { VStack } from 'shared/ui/Stack';

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
      <VStack max className={classNames('', {}, [className])} gap='16'>
        <CommentCard
          isLoading={true} />
        <CommentCard
          isLoading={true} />
      </VStack>
    );
  }

  if (!comments) {
    return <Text text={t('Комментарии отсутствуют')} />;
  }

  return (
    <VStack max className={classNames('', {}, [className])} gap='16'>
      {
        comments.map(comment =>
          <CommentCard
            key={comment.id}
            comment={comment}
            isLoading={isLoading} />)
      }
    </VStack>
  );
};