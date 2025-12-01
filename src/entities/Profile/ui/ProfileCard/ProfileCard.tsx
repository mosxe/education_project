import { FC } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { Input } from 'shared/ui/Input';
import { Loader } from 'shared/ui/Loader';
import { Profile } from '../../model/types/profile';
import { Avatar } from 'shared/ui/Avatar';
import { CurrencySelect, Currency } from 'entities/Currency';
import { CountrySelect, Country } from 'entities/Country';
import { HStack, VStack } from 'shared/ui/Stack';

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
    return (
      <HStack max justify='center'>
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack max justify='center'>
        <Text
          title={t('Произошла ошибка')}
          text={t('Попробуй обновить страницу')}
          variant='error'
          align='center'
        />
      </HStack>
    );
  }

  return (
    <VStack
      gap='16'
      max
      className={classNames(cls.ProfileCard, mods, [className])}
    >
      {data?.avatar && (
        <HStack justify='center' max>
          <Avatar src={data?.avatar} alt='Аватар' size={150} />
        </HStack>
      )}
      <Input
        value={data?.first}
        placeholder={t('Ваше имя')}
        onChange={onChangeFirstname}
        readOnly={readonly}
        data-testid={'ProfileCard.firstname'}
      />
      <Input
        value={data?.lastname}
        placeholder={t('Ваша фамилия')}
        onChange={onChangeLastname}
        readOnly={readonly}
        data-testid={'ProfileCard.lastname'}
      />
      <Input
        type='number'
        value={data?.age}
        placeholder={t('Ваш возраст')}
        onChange={onChangeAge}
        readOnly={readonly}
      />
      <Input
        value={data?.city}
        placeholder={t('Город')}
        onChange={onChangeCity}
        readOnly={readonly}
      />
      <Input
        value={data?.username}
        placeholder={t('Имя пользователя')}
        onChange={onChangeUsername}
        readOnly={readonly}
      />
      <Input
        value={data?.avatar}
        placeholder={t('Введите ссылку на аватар')}
        onChange={onChangeAvatar}
        readOnly={readonly}
      />
      <CurrencySelect
        value={data?.currency}
        onChange={onChangeCurrency}
        readOnly={readonly}
      />
      <CountrySelect
        value={data?.country}
        onChange={onChangeCountry}
        readOnly={readonly}
      />
    </VStack>
  );
};
