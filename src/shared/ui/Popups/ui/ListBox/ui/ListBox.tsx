import { Fragment, ReactNode, useMemo } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import cls from './ListBox.module.scss';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui/Button';
import { VStack } from 'shared/ui/Stack';
import { DropdownDirection } from '../../../../../types/ui';
import { mapDirectionClass } from '../../../styles/consts';
import popupCls from '../../../styles/popup.module.scss';

export interface ListBoxItem<T extends string> {
  value: T;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps<T extends string> {
  items?: ListBoxItem<T>[];
  value?: T;
  defaultValue?: string;
  onChange: (value: T) => void;
  className?: string;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

export const ListBox = <T extends string>(props: ListBoxProps<T>) => {
  const {
    items,
    value,
    defaultValue,
    className,
    onChange,
    readonly,
    direction = 'bottom left',
    label
  } = props;

  const optionsClasses = [mapDirectionClass[direction], popupCls.menu];

  const selectedItem = useMemo(() => {
    return items?.find((item) => item.value === value);
  }, [items, value]);

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
          <Button variant='filled' disabled={readonly} size='s'>
            {selectedItem?.content ?? defaultValue}
          </Button>
        </HListBox.Button>
        <HListBox.Options
          className={classNames(cls.options, {}, optionsClasses)}
        >
          {items?.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(cls.item, {
                    [popupCls.active]: active,
                    [popupCls.selected]: selected,
                    [popupCls.disabled]: item.disabled
                  })}
                >
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </VStack>
  );
};
