import { memo, useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { LoginModal } from 'features/AuthByUsername';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { HStack } from 'shared/ui/Stack';
import { NotificationButton } from 'features/notificationButton';
import { AvatarDropDown } from 'features/avatarDropDown';

interface NavbarProps {
  className?: string;
};

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);


  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  if (authData) {
    return (
      <header className={classNames(cls.navbar, {}, [className])}>
        <div className={cls.navbarWrapper}>
          <Text
            className={cls.appName}
            title={t('Мое приложение')}
            theme={TextTheme.INVERTED}
          />
          <AppLink
            to={RoutePath.article_create}
            theme={AppLinkTheme.SECONDARY}
          >
            {t('Создать статью')}
          </AppLink>
        </div>
        <HStack gap='16' className={cls.actions}>
          <NotificationButton />
          <AvatarDropDown />
        </HStack>
      </header >
    );
  }

  return (
    <header className={classNames(cls.navbar, {}, [className])}>
      <Button
        className={cls.actions}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={onShowModal}
      >
        {t('Войти')}
      </Button>
      {
        isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      }
    </header >
  );
});