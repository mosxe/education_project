import { memo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';


export enum TextTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  ERROR = 'error'
}

export type TextAlign = 'left' | 'center' | 'right';

export type TextSize = 's' | 'm' | 'l';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
}

type HeaderTag = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTag> = {
  's': 'h3',
  'm': 'h2',
  'l': 'h1'
};

export const Text = memo((props: TextProps) => {
  const { className, title, text, theme = TextTheme.PRIMARY, align = 'left', size = 'm' } = props;

  const mods: Mods = {
    [cls[theme]]: true,
    [cls[align]]: true,
    [cls[`size_${size}`]]: true
  };

  const HeaderTag = mapSizeToHeaderTag[size];

  return (
    <div className={classNames(cls.Text, mods, [className])}>
      {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});