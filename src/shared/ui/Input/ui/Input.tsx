import React, { InputHTMLAttributes, memo, useRef, useEffect } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string;
  label?: string;
  value?: string | number;
  onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    label,
    autoFocus,
    readOnly,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  const mods: Mods = {
    [cls.readonly]: readOnly
  };

  useEffect(() => {
    if (autoFocus && ref.current) {
      ref.current.focus();
    }
  }, [autoFocus]);

  return (
    <div className={cls.Input}>
      {label && <span>{label}</span>}
      <input
        ref={ref}
        className={classNames('', mods, [className])}
        value={value}
        onChange={onChangeHandler}
        type={type}
        readOnly={readOnly}
        {...otherProps}
      />
    </div>
  );
});