import { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePageHeader.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData, getProfileReadonly } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { profileActions, updateProfileData } from 'entities/Profile';
import { getUserAuthData } from 'entities/User';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('profile');
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const dispatch = useAppDispatch();
  const readonly = useSelector(getProfileReadonly);
  const canEdit = authData?.id === profileData?.id;

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);


  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);


  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      {
        canEdit &&
        (readonly ? (
          <Button theme={ButtonTheme.OUTLINE} onClick={onEdit}>
            {t('Редактировать')}
          </Button>
        ) : (
          <div >
            <Button
              theme={ButtonTheme.OUTLINE}
              onClick={onSave}
            >
              {t('Сохранить')}
            </Button>
            <Button
              theme={ButtonTheme.OUTLINE_RED}
              onClick={onCancelEdit}
              className={classNames(cls.btnSave, {}, [])}
            >
              {t('Отменить')}
            </Button>
          </div>
        ))}
    </div>
  );
};