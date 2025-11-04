import { FC, ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';
import { Card } from 'shared/ui/Card';
import { CardTheme } from 'shared/ui/Card/ui/Card';

export interface TabItem {
  value: string;
  content: ReactNode;
}
interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
}

export const Tabs: FC<TabsProps> = (props) => {
  const { className, tabs, value, onTabClick } = props;

  const clickHandle = useCallback((tab: TabItem) => {
    return () => onTabClick(tab);
  }, [onTabClick]);

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map(tab => <Card
        className={cls.tab}
        theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
        key={tab.value}
        onClick={clickHandle(tab)}
      >
        {tab.content}
      </Card>)}
    </div>
  );
};