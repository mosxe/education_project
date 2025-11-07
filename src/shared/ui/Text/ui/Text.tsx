import { memo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';


export enum TextTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  ERROR = 'error'
}

export type TextAlign = 'left' | 'center' | 'right';

export type TextSize = 'm' | 'l';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
}

export const Text = memo((props: TextProps) => {
  const { className, title, text, theme = TextTheme.PRIMARY, align = 'left', size = 'm' } = props;

  const mods: Mods = {
    [cls[theme]]: true,
    [cls[align]]: true,
    [cls[`size_${size}`]]: true
  };

  return (
    <div className={classNames(cls.Text, mods, [className])}>
      {title && <div className={cls.title}>{title}</div>}
      {text && <div className={cls.text}>{text}</div>}
    </div>
  );
});