import { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPageFilters.module.scss';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticleView } from 'entities/Article';
import { ArticleViewSelector } from 'features/ArticleViewSelector';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';
import { useTranslation } from 'react-i18next';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface ArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters: FC<ArticlesPageFiltersProps> = (props) => {
  const { className } = props;
  const dispatch = useAppDispatch();

  const { t } = useTranslation();
  const {
    onChangeOrder,
    onChangeSearch,
    onChangeSort,
    onChangeType,
    order,
    search,
    sort,
    type,
    view
  } = useArticleFilters();

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch]
  );

  return (
    <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
      </div>
    </div>
  );
};
