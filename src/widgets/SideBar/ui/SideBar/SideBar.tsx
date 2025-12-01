import { memo, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import cls from './SideBar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { VStack } from 'shared/ui/Stack';
import { AppLogo } from 'shared/ui/AppLogo';
import { Icon } from 'shared/ui/Icon';
import ArrowIcon from 'shared/assets/icons/arrow-bottom.svg';

interface SideBarProps {
  className?: string;
}

export const SideBar = memo((props: SideBarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const { className } = props;
  const SidebarItemList = useSelector(getSidebarItems);
  const onToogle = () => setCollapsed((prev) => !prev);

  const itemList = useMemo(() => {
    return SidebarItemList.map((item) => (
      <SidebarItem item={item} key={item.path} collapsed={collapsed} />
    ));
  }, [collapsed, SidebarItemList]);

  return (
    <aside
      data-testid='sidebar'
      className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [
        className
      ])}
    >
      <AppLogo size={collapsed ? 30 : 80} />
      <VStack className={cls.items} gap='8' role='navigation'>
        {itemList}
      </VStack>
      <Icon
        data-testid='sidebar-toggle'
        className={cls.collapseBtn}
        onClick={onToogle}
        Svg={ArrowIcon}
        clickable
      />
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} short={collapsed} />
      </div>
    </aside>
  );
});
