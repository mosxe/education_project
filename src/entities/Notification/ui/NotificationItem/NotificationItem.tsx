import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotificationItem.module.scss';
import { Notification } from '../../model/types/notification';
import { Card } from 'shared/ui/Card';
import { CardTheme } from 'shared/ui/Card/ui/Card';
import { Text } from 'shared/ui/Text';

interface NotificationItemProps {
  className?: string;
  item: Notification;
}

export const NotificationItem: FC<NotificationItemProps> = (props) => {
  const { className, item } = props;

  const content = (
    <Card
      theme={CardTheme.OUTLINED}
      className={classNames(cls.NotificationItem, {}, [className])}
    >
      <Text title={item.title} text={item.description} />
    </Card>
  );

  if (item.href) {
    return <a target='_blank' href={item.href} rel="noreferrer" className={cls.link}>{content}</a>;
  }

  return content;
};