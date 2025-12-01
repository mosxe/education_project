import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLogo.module.scss';
import Logo from 'shared/assets/images/bull.png';
import { HStack } from 'shared/ui/Stack';

interface AppLogoProps {
  className?: string;
}

export const AppLogo = (props: AppLogoProps) => {
  const { className } = props;

  return (
    <HStack
      max
      justify='center'
      className={classNames(cls.AppLogo, {}, [className])}
    >
      <div className={cls.gradientBig}></div>
      <div className={cls.gradientSmall}></div>
      <img src={Logo} alt='logo' />
    </HStack>
  );
};
