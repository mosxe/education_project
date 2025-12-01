import { FC, ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';
import { Card } from 'shared/ui/Card';
import { Flex, FlexDirection } from 'shared/ui/Stack/ui/Flex/Flex';

export interface TabItem {
  value: string;
  content: ReactNode;
}
interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
  direction?: FlexDirection;
}

export const Tabs: FC<TabsProps> = (props) => {
  const { className, tabs, value, onTabClick, direction = 'row' } = props;

  const clickHandle = useCallback(
    (tab: TabItem) => {
      return () => onTabClick(tab);
    },
    [onTabClick]
  );

  return (
    <Flex
      direction={direction}
      gap='8'
      align='start'
      className={classNames('', {}, [className])}
    >
      {tabs.map((tab) => {
        const isSelected = tab.value === value;
        return (
          <Card
            className={classNames(cls.tab, { [cls.selected]: isSelected }, [
              className
            ])}
            variant={tab.value === value ? 'light' : 'normal'}
            key={tab.value}
            onClick={clickHandle(tab)}
            border='round'
          >
            {tab.content}
          </Card>
        );
      })}
    </Flex>
  );
};
