import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'shared/ui/Page';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage: FC<ArticleEditPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  return (
    <Page className={classNames('', {}, [className])}>
      {isEdit ? `${t('Редактирование статьи с ID')} ${id}` : t('Создание новой статьи')}
    </Page>
  );
};

export default ArticleEditPage;