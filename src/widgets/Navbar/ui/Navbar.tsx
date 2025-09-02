import { FC, useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { LoginModal } from 'features/AuthByUsername';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;

};

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);


  return <div className={classNames(cls.navbar, {}, [className])}>
    <Button
      theme={ButtonTheme.CLEAR_INVERTED}
      onClick={onShowModal}
    >
      {t('Войти')}
    </Button>
    <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />

  </div >;
};





