import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotificationButton.module.scss';
import { Icon } from 'shared/ui/Icon';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { Popover } from 'shared/ui/Popups';
import { NotificationList } from 'entities/Notification';
import { Button } from 'shared/ui/Button';
import { Drawer } from 'shared/ui/Drawer';
import { useDevice } from 'shared/lib/hooks/useDevice/useDevice';
import { useCallback, useState } from 'react';

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = (props: NotificationButtonProps) => {
  const { className } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isMobile = useDevice();

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  if (isMobile) {
    return (
      <>
        <Button variant='clear' onClick={onOpenDrawer}>
          <Icon Svg={NotificationIcon} width={40} height={40} />
        </Button>
        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
          <NotificationList
            className={classNames(cls.NotificationButton, {}, [
              cls.NotificationButtonMobile
            ])}
          />
        </Drawer>
      </>
    );
  }

  return (
    <Popover
      className={classNames('', {}, [className])}
      direction='bottom left'
      trigger={
        <Button variant='clear'>
          <Icon
            Svg={NotificationIcon}
            clickable
            onClick={onOpenDrawer}
            width={40}
            height={40}
          />
        </Button>
      }
    >
      <NotificationList className={cls.NotificationButton} />
    </Popover>
  );
};
