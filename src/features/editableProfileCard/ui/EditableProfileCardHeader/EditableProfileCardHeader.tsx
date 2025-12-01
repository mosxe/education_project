import { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack';

interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader: FC<EditableProfileCardHeaderProps> = (
  props
) => {
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
    <HStack className={classNames('', {}, [className])} justify='between' max>
      <Text title={t('Профиль')} />
      {canEdit &&
        (readonly ? (
          <Button
            variant='outline'
            onClick={onEdit}
            data-testid='EditableProfileCardHeader.EditButton'
          >
            {t('Редактировать')}
          </Button>
        ) : (
          <HStack gap='16'>
            <Button
              variant='outline'
              onClick={onSave}
              data-testid='EditableProfileCardHeader.SaveButton'
            >
              {t('Сохранить')}
            </Button>
            <Button
              variant='outline'
              onClick={onCancelEdit}
              data-testid='EditableProfileCardHeader.CancelButton'
            >
              {t('Отменить')}
            </Button>
          </HStack>
        ))}
    </HStack>
  );
};
