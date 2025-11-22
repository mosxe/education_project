import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
import { Page } from 'shared/ui/Page';
import { RatingCard } from 'entities/Rating';

const MainPage = () => {
  const { t } = useTranslation('main');

  return <Page>
    <h2 style={{ marginBottom: '20px' }}>{t('Главная страница')}</h2>
    <RatingCard
      title='Как вам статья?'
      feedbackTitle='Оставьте отзыв о статье'
      hasFeedback
    />
    <Counter />
  </Page>;
};

export default MainPage;