import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';


export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text = memo((props: TextProps) => {
  const { className, title, text, theme = TextTheme.PRIMARY } = props;

  return (
    <div className={classNames(cls.Text, { [cls[theme]]: true }, [className])}>
      <div className={cls.title}>{title}</div>
      <div className={cls.text}>{text}</div>
    </div>
  );
});