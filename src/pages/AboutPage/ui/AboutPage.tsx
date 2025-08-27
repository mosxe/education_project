import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return <h2>{t('О сайте')} !!!</h2>;
};

export default AboutPage;