import { FC } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { Input } from 'shared/ui/Input';
import { Loader } from 'shared/ui/Loader';
import { Profile } from '../../model/types/profile';
import { TextTheme } from 'shared/ui/Text/ui/Text';
import { Avatar } from 'shared/ui/Avatar';
import { CurrencySelect, Currency } from 'entities/Currency';
import { CountrySelect, Country } from 'entities/Country';


interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string | undefined;
  readonly?: boolean;
  onChangeFirstname?: (value: string) => void;
  onChangeLastname?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCurrency?: (value: Currency) => void;
  onChangeCountry?: (value: Country) => void;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const {
    data,
    isLoading,
    error,
    className,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry
  } = props;
  const { t } = useTranslation('profile');



  const mods: Mods = {
    [cls.editing]: !readonly
  };

  if (isLoading) {
    return <div className={classNames('', {}, [className, cls.wrapper])}>
      <Loader />
    </div>;
  }

  if (error) {
    return <div className={classNames(cls.ProfileCard, {}, [className, cls.wrapper])}>
      <Text
        title={t('Произошла ошибка')}
        text={t('Попробуй обновить страницу')}
        theme={TextTheme.ERROR}
        align='center'
      />
    </div>;
  }

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      <div className={cls.data}>
        {data?.avatar && <div className={cls.avatarWrapper}><Avatar src={data?.avatar} alt='Аватар' size={150} /></div>}
        <Input
          value={data?.first}
          placeholder={t('Ваше имя')}
          className={cls.input}
          onChange={onChangeFirstname}
          readOnly={readonly}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Ваша фамилия')}
          className={cls.input}
          onChange={onChangeLastname}
          readOnly={readonly}
        />
        <Input
          type='number'
          value={data?.age}
          placeholder={t('Ваш возраст')}
          className={cls.input}
          onChange={onChangeAge}
          readOnly={readonly}
        />
        <Input
          value={data?.city}
          placeholder={t('Город')}
          className={cls.input}
          onChange={onChangeCity}
          readOnly={readonly}
        />
        <Input
          value={data?.username}
          placeholder={t('Имя пользователя')}
          className={cls.input}
          onChange={onChangeUsername}
          readOnly={readonly}
        />
        <Input
          value={data?.avatar}
          placeholder={t('Введите ссылку на аватар')}
          className={cls.input}
          onChange={onChangeAvatar}
          readOnly={readonly}
        />
        <CurrencySelect
          className={cls.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readOnly={readonly}
        />
        <CountrySelect
          className={cls.input}
          value={data?.country}
          onChange={onChangeCountry}
          readOnly={readonly}
        />
      </div>
    </div>
  );
};