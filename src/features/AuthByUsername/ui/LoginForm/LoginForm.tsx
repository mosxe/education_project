import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { Text } from 'shared/ui/Text';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { TextTheme } from 'shared/ui/Text/ui/Text';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username, password, error, isLoading } = useSelector(getLoginState);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUserName(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginHandler = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Форма авторизации')} />
      {error && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />}
      <Input
        autoFocus
        label={t('Логин')}
        value={username}
        onChange={onChangeUsername}
      />
      <Input
        label={t('Пароль')}
        value={password}
        onChange={onChangePassword}
      />
      <Button
        className={cls.loginBtn}
        onClick={onLoginHandler}
        disabled={isLoading}
      >{t('Войти')}
      </Button>
    </div>
  );
});