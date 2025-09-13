import { memo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';


export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

export type textAlign = 'left' | 'center' | 'right';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: textAlign;
}

export const Text = memo((props: TextProps) => {
  const { className, title, text, theme = TextTheme.PRIMARY, align = 'left' } = props;

  const mods: Mods = {
    [cls[theme]]: true,
    [cls[align]]: true
  };

  return (
    <div className={classNames(cls.Text, mods, [className])}>
      <div className={cls.title}>{title}</div>
      <div className={cls.text}>{text}</div>
    </div>
  );
});