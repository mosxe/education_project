import { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPageHeader.module.scss';
import { ButtonTheme, Button } from 'shared/ui/Button';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/Article';
import { getCanEditArticle } from '../../model/selectors/article';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = (props) => {
  const { className } = props;
  const navigate = useNavigate();
  const { t } = useTranslation('article-details');
  const article = useSelector(getArticleDetailsData);
  const canEdit = useSelector(getCanEditArticle);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    navigate(RoutePath.articles + '/' + article?.id + '/edit');
  }, [navigate, article?.id]);

  return (
    <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
      <Button
        theme={ButtonTheme.OUTLINE}
        onClick={onBackToList}>{t('Назад к списку')}
      </Button>
      {
        canEdit && <Button
          className={cls.editBtn}
          theme={ButtonTheme.OUTLINE}
          onClick={onEditArticle}>{t('Редактировать')}
        </Button>
      }
    </div>
  );
};