import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import cls from './ListBox.module.scss';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui/Button';
import { VStack } from 'shared/ui/Stack';
import { DropdownDirection } from '../../../../../types/ui';
import { mapDirectionClass } from '../../../styles/consts';
import popupCls from '../../../styles/popup.module.scss';

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps {
  items?: ListBoxItem[];
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  className?: string;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

export const ListBox = (props: ListBoxProps) => {
  const { items, value, defaultValue, className, onChange, readonly, direction = 'bottom left', label } = props;

  const optionsClasses = [mapDirectionClass[direction]];

  return (
    <VStack gap='4'>
      {label && <span>{label}</span>}
      <HListBox
        as='div'
        className={classNames(popupCls.popup, {}, [className])}
        value={value}
        onChange={onChange}
        disabled={readonly}
      >
        <HListBox.Button className={popupCls.trigger} as='div'>
          <Button disabled={readonly}>
            {value ?? defaultValue}
          </Button>
        </HListBox.Button>
        <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
          {items?.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(cls.item, { [popupCls.active]: active, [popupCls.selected]: selected, [popupCls.disabled]: item.disabled })}
                >
                  {item.value}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </VStack>
  );
};