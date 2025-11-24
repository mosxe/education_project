import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
import { Page } from 'shared/ui/Page';

const MainPage = () => {
  const { t } = useTranslation('main');

  return <Page data-testid='MainPage'>
    <h2 style={{ marginBottom: '20px' }}>{t('Главная страница')}</h2>
    <Counter />
  </Page>;
};

export default MainPage;