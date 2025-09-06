import { FC, useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { LoginModal } from 'features/AuthByUsername';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';

interface NavbarProps {
  className?: string;

};

export const Navbar: FC<NavbarProps> = ({ className }) => {
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
      <div className={classNames(cls.navbar, {}, [className])}>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          onClick={onLogout}
        >
          {t('Выйти')}
        </Button>
      </div >
    );

  }


  return <div className={classNames(cls.navbar, {}, [className])}>
    <Button
      theme={ButtonTheme.CLEAR_INVERTED}
      onClick={onShowModal}
    >
      {t('Войти')}
    </Button>
    {
      isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    }
  </div >;
};





