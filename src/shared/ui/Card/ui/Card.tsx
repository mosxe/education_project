import { memo, HTMLAttributes, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export type CardVariant = 'normal' | 'outlined' | 'light';
type CardPadding = '0' | '8' | '16' | '24' | '32';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  variant?: CardVariant;
  padding?: CardPadding;
}

const mapPaddingToClass: Record<CardPadding, string> = {
  '0': 'gap_0',
  '8': 'gap_8',
  '16': 'gap_16',
  '24': 'gap_24',
  '32': 'gap_32'
};

export const Card = memo((props: CardProps) => {
  const {
    className,
    children,
    variant = 'normal',
    padding = '8',
    ...otherProps
  } = props;

  const paddingClass = mapPaddingToClass[padding];

  return (
    <div
      className={classNames(cls.Card, {}, [
        className,
        cls[variant],
        cls[paddingClass]
      ])}
      {...otherProps}
    >
      {children}
    </div>
  );
});
