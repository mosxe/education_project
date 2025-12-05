import { FC } from 'react';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { Text } from 'shared/ui/Text';
import { Avatar } from 'shared/ui/Avatar';
import { Skeleton } from 'shared/ui/Skeleton';
import { AppLink } from 'shared/ui/AppLink';
import { getRouteProfile } from 'shared/const/router';
import { HStack, VStack } from 'shared/ui/Stack';
import { Card } from 'shared/ui/Card';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard: FC<CommentCardProps> = (props) => {
  const { comment, isLoading, className } = props;

  if (isLoading) {
    return (
      <Card padding='24' max className={className}>
        <VStack max gap='8' data-testid='CommentCard.Loading'>
          <HStack gap='8'>
            <Skeleton height={30} width={30} border='50%' />
            <Skeleton height={16} width={100} className={cls.username} />
          </HStack>
          <Skeleton width='100%' height={50} className={cls.text} />
        </VStack>
      </Card>
    );
  }
  return (
    <Card padding='24' max className={className}>
      <VStack gap='8' data-testid='CommentCard.Content' max>
        <AppLink to={getRouteProfile(comment?.user.id ?? '')}>
          <HStack gap='8'>
            {comment?.user.avatar && (
              <Avatar size={30} src={comment.user.avatar} />
            )}
            <Text className={cls.username} title={comment?.user.username} />
          </HStack>
        </AppLink>
        <Text className={cls.text} text={comment?.text} />
      </VStack>
    </Card>
  );
};
