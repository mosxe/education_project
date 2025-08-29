import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

const MainPage = () => {
  const { t } = useTranslation('main');

  return <div>
    <h2 style={{ marginBottom: '20px' }}>{t('Главная страница')}</h2>
    <Counter />
  </div>;
};

export default MainPage;