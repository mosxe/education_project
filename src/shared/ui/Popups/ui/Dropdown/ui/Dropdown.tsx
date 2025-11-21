import { Fragment, ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import cls from './Dropdown.module.scss';
import { classNames } from 'shared/lib';
import { DropdownDirection } from '../../../../../types/ui';
import { mapDirectionClass } from '../../../styles/consts';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import popupCls from '../../../styles/popup.module.scss';

export interface DropdownItem {
  value?: string;
  content: ReactNode;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger: ReactNode;
  direction?: DropdownDirection;
}

export const Dropdown = (props: DropdownProps) => {
  const { className, trigger, items, direction = 'bottom left' } = props;
  const menuClasses = [mapDirectionClass[direction]];

  return (
    <Menu as='div' className={classNames(popupCls.popup, {}, [className])}>
      <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item, index) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type='button'
              className={classNames(cls.item, { [popupCls.active]: active })}
              onClick={item.onClick}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item key={index} as={AppLink} to={item.href} disabled={item.disabled}>
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item key={index} as={Fragment} disabled={item.disabled}>
              {content}
            </Menu.Item>
          );

        })}
      </Menu.Items>
    </Menu>
  );
};