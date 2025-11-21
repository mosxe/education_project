import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotificationButton.module.scss';
import { Icon } from 'shared/ui/Icon';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { Popover } from 'shared/ui/Popups';
import { NotificationList } from 'entities/Notification';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { useDevice } from 'shared/lib/hooks/useDevice/useDevice';
import { useCallback, useState } from 'react';
import { AnimationProvider } from 'shared/lib/components/AnimationProvider';

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
        <Button theme={ButtonTheme.CLEAR} onClick={onOpenDrawer}>
          <Icon Svg={NotificationIcon} inverted />
        </Button>
        <AnimationProvider>
          <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
            <NotificationList className={classNames(cls.NotificationButton, {}, [cls.NotificationButtonMobile])} />
          </Drawer>
        </AnimationProvider>
      </>
    );
  }

  return (
    <Popover
      className={classNames('', {}, [className])}
      direction='bottom left'
      trigger={
        <Button theme={ButtonTheme.CLEAR}>
          <Icon Svg={NotificationIcon} inverted />
        </Button>
      }>
      <NotificationList className={cls.NotificationButton} />
    </Popover>
  );
};