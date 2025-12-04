import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { User } from 'entities/User';
import { HStack, VStack } from 'shared/ui/Stack';
import { Avatar } from 'shared/ui/Avatar';
import { Text } from 'shared/ui/Text';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';

interface ArticleAdditionalInfoProps {
  className?: string;
  author: User;
  createdAt: string;
  views: number;
  onEdit: () => void;
}

export const ArticleAdditionalInfo: FC<ArticleAdditionalInfoProps> = (
  props
) => {
  const { className, author, createdAt, views, onEdit } = props;
  const { t } = useTranslation();

  return (
    <VStack gap='32' className={classNames('', {}, [className])}>
      <HStack gap='8'>
        <Avatar src={author.avatar} size={32} />
        <Text text={author.username} bold />
        <Text text={createdAt} />
      </HStack>
      <Button onClick={onEdit}>{t('Редактировать')}</Button>
      <Text text={t('{{count}} просмотров', { count: views })} />
    </VStack>
  );
};
