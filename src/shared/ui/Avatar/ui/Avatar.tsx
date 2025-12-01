import { CSSProperties, FC, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from 'shared/ui/AppImage';
import { Icon } from '../../Icon';
import UserIcon from '../../../assets/icons/user-filled.svg';
import { Skeleton } from 'shared/ui/Skeleton';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar: FC<AvatarProps> = (props) => {
  const { className, src, size = 100, alt = 'Картинка' } = props;

  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size,
      height: size
    };
  }, [size]);

  const errorFallback = <Icon Svg={UserIcon} />;

  return (
    <AppImage
      src={src}
      alt={alt}
      style={styles}
      className={classNames(cls.Avatar, {}, [className])}
      errorFallback={errorFallback}
      fallback={<Skeleton width={size} height={size} border='50%' />}
    />
  );
};
