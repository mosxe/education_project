import { Skeleton } from 'shared/ui/Skeleton';
import { HStack, VStack } from 'shared/ui/Stack';
import { Card } from 'shared/ui/Card';
import cls from '../ProfileCard/ProfileCard.module.scss';

export const ProfileLoader = () => {
  return (
    <Card className={cls.ProfileCard} padding='24'>
      <HStack justify='center' max className={cls.avatarWrapper}>
        <Skeleton width={150} height={150} border='100%' />
      </HStack>
      <HStack max gap='24'>
        <VStack gap='16' max>
          <Skeleton width='100%' height={38} />
          <Skeleton width='100%' height={38} />
          <Skeleton width='100%' height={38} />
          <Skeleton width='100%' height={38} />
        </VStack>
        <VStack gap='16' max>
          <Skeleton width='100%' height={38} />
          <Skeleton width='100%' height={38} />
          <Skeleton width='100%' height={38} />
          <Skeleton width='100%' height={38} />
        </VStack>
      </HStack>
    </Card>
  );
};
