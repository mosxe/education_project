import {FC, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {ThemeSwitcher} from 'shared/ui/ThemeSwitcher';
import {LangSwitcher} from 'widgets/LangSwitcher';
import cls from './SideBar.module.scss';

interface SideBarProps {
  className?: string;
}

export const SideBar:FC<SideBarProps> = (props) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const { className } = props;

  const onToogle = () => setCollapsed((prev) => !prev);

  return (
    <div className={classNames(cls.SideBar, {[cls.collapsed] : collapsed}, [className])}>
      <button onClick={onToogle}>toogle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang}/>
      </div>
    </div>
  );
};