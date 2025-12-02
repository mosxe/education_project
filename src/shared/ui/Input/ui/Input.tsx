import React, {
  InputHTMLAttributes,
  memo,
  useRef,
  useEffect,
  ReactNode
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import { Text } from 'shared/ui/Text';
import { HStack } from 'shared/ui/Stack';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  label?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
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
    addonLeft,
    addonRight,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  const mods: Mods = {
    [cls.readonly]: readOnly,
    [cls.withAddonLeft]: Boolean(addonLeft),
    [cls.withAddonRight]: Boolean(addonRight)
  };

  useEffect(() => {
    if (autoFocus && ref.current) {
      ref.current.focus();
    }
  }, [autoFocus]);

  return (
    <HStack max gap='8'>
      {label && <Text text={label} className={cls.Label} />}
      <div className={cls.Input}>
        {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
        <input
          ref={ref}
          className={classNames('', mods, [className])}
          value={value}
          onChange={onChangeHandler}
          type={type}
          readOnly={readOnly}
          {...otherProps}
        />
        {addonRight && <div className={cls.addonRight}>{addonRight}</div>}
      </div>
    </HStack>
  );
});
