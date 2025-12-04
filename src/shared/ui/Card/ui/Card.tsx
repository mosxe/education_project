import { memo, HTMLAttributes, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export type CardVariant = 'normal' | 'outlined' | 'light';
type CardPadding = '0' | '8' | '16' | '24' | '32';
type CardBorder = 'round' | 'normal';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  variant?: CardVariant;
  padding?: CardPadding;
  border?: CardBorder;
  max?: boolean;
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
    border = 'normal',
    max = false,
    ...otherProps
  } = props;

  const paddingClass = mapPaddingToClass[padding];

  return (
    <div
      className={classNames(cls.Card, { [cls.max]: max }, [
        className,
        cls[variant],
        cls[paddingClass],
        cls[`border_${border}`]
      ])}
      {...otherProps}
    >
      {children}
    </div>
  );
});
