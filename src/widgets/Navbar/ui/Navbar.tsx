import {FC} from 'react';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import {classNames} from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps  {
  className?: string;

};

export const Navbar: FC<NavbarProps> = ({className}) => {
  const {t} = useTranslation();

  return <div className={classNames(cls.navbar, {}, [className])}>
    <div className={cls.links}>
      <AppLink to='/' className={cls.mainLink}>{t('Главная меню')}</AppLink>
      <AppLink to='/about' className={cls.mainLink}>{t('О сайте меню')}</AppLink>
    </div>
  </div>;
};





