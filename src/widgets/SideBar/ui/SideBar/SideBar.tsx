import { memo, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ButtonTheme, ButtonSize } from 'shared/ui/Button';
import cls from './SideBar.module.scss';
import { SidebarItemList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SideBarProps {
  className?: string;
}

export const SideBar = memo((props: SideBarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const { className } = props;
  const onToogle = () => setCollapsed((prev) => !prev);

  const itemList = useMemo(() => {
    return SidebarItemList.map((item) => <SidebarItem item={item} key={item.path} collapsed={collapsed} />);
  }, [collapsed]);

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}>
      <Button
        data-testid="sidebar-toggle"
        className={cls.collapseBtn}
        onClick={onToogle}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>
        {itemList}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} short={collapsed} />
      </div>
    </div>
  );
});