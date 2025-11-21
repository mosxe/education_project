import { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Dropdown } from 'shared/ui/Popups';
import { Avatar } from 'shared/ui/Avatar';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

interface AvatarDropDownProps {
  className?: string;
}

export const AvatarDropDown = (props: AvatarDropDownProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();


  const isAdminPanelAvailable = isAdmin || isManager;

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (!authData) {
    return null;
  }

  return (
    <Dropdown
      className={classNames('', {}, [className])}
      direction='bottom left'
      items={[
        {
          content: t('Профиль'),
          href: RoutePath.profile + authData.id
        },
        ...(isAdminPanelAvailable ? [{
          content: t('Админка'),
          href: RoutePath.admin_panel
        }] : []),
        {
          content: t('Выйти'),
          onClick: onLogout
        }
      ]}
      trigger={<Avatar size={40} src={authData.avatar} />}
    />
  );
};