import {FC} from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';

interface NavbarProps  {
  className?: string;

};

export const Navbar: FC<NavbarProps> = ({className}) => {
    return <div className={classNames(cls.navbar, {}, [className])}> 
      <div className={cls.links}>
        <AppLink to='/' className={cls.mainLink}>Главная</AppLink>
        <AppLink to='/about' className={cls.mainLink}>О сайте</AppLink>
      </div>
    </div>
};





