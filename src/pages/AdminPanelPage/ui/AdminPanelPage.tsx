import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page';

const AdminPanelPage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <h2>{t('Админ панель')}</h2>
    </Page>
  );
};

export default AdminPanelPage;