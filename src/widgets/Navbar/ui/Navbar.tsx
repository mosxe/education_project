import { memo, useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { LoginModal } from 'features/AuthByUsername';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown';
import { Avatar } from 'shared/ui/Avatar';

interface NavbarProps {
  className?: string;

};

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const authData = useSelector(getUserAuthData);
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);


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
        <Dropdown
          direction='bottom left'
          className={cls.dropdown}
          items={[
            {
              content: t('Профиль'),
              href: RoutePath.profile + authData.id
            },
            {
              content: t('Выйти'),
              onClick: onLogout
            }
          ]}
          trigger={<Avatar size={40} src={authData.avatar} />}
        />
      </header >
    );
  }

  return (
    <header className={classNames(cls.navbar, {}, [className])}>
      <Button
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