import { ChangeEvent, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';


export interface SelectOption<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readOnly?: boolean;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const {
    className,
    label,
    options,
    value,
    onChange,
    readOnly
  } = props;

  const mods: Mods = {};

  const optionsList = useMemo(() => {
    return options?.map((opt) => <option key={opt.value} value={opt.value}>{opt.content}</option>);
  }, [options]);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
  };

  return (
    <div className={classNames(cls.Wrapper, mods, [className])}>
      {label && <span className={cls.label}>{label}</span>}
      <select
        value={value}
        onChange={onChangeHandler}
        className={cls.select}
        disabled={readOnly}
      >
        {optionsList}
      </select>
    </div>
  );
};