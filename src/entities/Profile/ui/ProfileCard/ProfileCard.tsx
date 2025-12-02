import { FC } from 'react';
import cls from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { Input } from 'shared/ui/Input';
import { Profile } from '../../model/types/profile';
import { CurrencySelect, Currency } from 'entities/Currency';
import { CountrySelect, Country } from 'entities/Country';
import { HStack, VStack } from 'shared/ui/Stack';
import { Card } from 'shared/ui/Card';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar';
import { ProfileLoader } from '../ProfileLoader/ProfileLoader';

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

  if (isLoading) {
    return <ProfileLoader />;
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
    <Card className={classNames(cls.ProfileCard, {}, [className])} padding='24'>
      {data?.avatar && (
        <HStack justify='center' max className={cls.avatarWrapper}>
          <Avatar src={data?.avatar} alt='Аватар' size={150} />
        </HStack>
      )}
      <HStack max gap='24'>
        <VStack gap='16' max>
          <Input
            value={data?.first}
            label={t('Имя')}
            onChange={onChangeFirstname}
            readOnly={readonly}
            data-testid={'ProfileCard.firstname'}
          />
          <Input
            value={data?.lastname}
            label={t('Фамилия')}
            onChange={onChangeLastname}
            readOnly={readonly}
            data-testid={'ProfileCard.lastname'}
          />
          <Input
            type='number'
            value={data?.age}
            label={t('Возраст')}
            onChange={onChangeAge}
            readOnly={readonly}
          />
          <Input
            value={data?.city}
            label={t('Город')}
            onChange={onChangeCity}
            readOnly={readonly}
          />
        </VStack>
        <VStack gap='16' max>
          <Input
            value={data?.username}
            label={t('Имя пользователя')}
            onChange={onChangeUsername}
            readOnly={readonly}
          />
          <Input
            value={data?.avatar}
            label={t('Ссылка на аватар')}
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
      </HStack>
    </Card>
  );
};
