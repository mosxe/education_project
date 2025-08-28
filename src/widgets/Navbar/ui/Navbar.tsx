import { FC, useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;

};

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev);
  }, []);

  return <div className={classNames(cls.navbar, {}, [className])}>
    <Button
      theme={ButtonTheme.CLEAR_INVERTED}
      onClick={onToggleModal}
    >
      {t('Войти')}
    </Button>
    <Modal isOpen={isAuthModal} onClose={onToggleModal}>
      asdasdasd ads asd adadasd asd asdasdasd  das dasdasd asd asdad asdasdsad asdasds
    </Modal>

  </div >;
};





