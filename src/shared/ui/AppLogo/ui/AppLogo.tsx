import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLogo.module.scss';
import Logo from 'shared/assets/icons/bull.svg';
import { HStack } from 'shared/ui/Stack';
import { Icon } from 'shared/ui/Icon';

interface AppLogoProps {
  className?: string;
  size?: number;
}

export const AppLogo = (props: AppLogoProps) => {
  const { className, size = 80 } = props;

  return (
    <HStack
      max
      justify='center'
      className={classNames(cls.AppLogo, {}, [className])}
    >
      <div className={cls.gradientBig}></div>
      <div className={cls.gradientSmall}></div>
      <Icon Svg={Logo} height={size} width={size} />
    </HStack>
  );
};
