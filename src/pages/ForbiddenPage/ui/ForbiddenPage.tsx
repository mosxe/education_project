import { FC } from 'react';
import { Page } from 'shared/ui/Page';
import { useTranslation } from 'react-i18next';

const ForbiddenPage: FC = () => {
  const { t } = useTranslation();

  return (
    <Page data-testid='ForbiddenPage'>{t('У вас нет доступа к этой странице')}</Page>
  );
};

export default ForbiddenPage;