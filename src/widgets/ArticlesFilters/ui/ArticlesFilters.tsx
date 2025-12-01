import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesFilters.module.scss';
import { SortOrder } from 'shared/types/sort';
import { useTranslation } from 'react-i18next';
import { ArticleSortField, ArticleType } from 'entities/Article';
import { Card } from 'shared/ui/Card';
import { VStack } from 'shared/ui/Stack';
import { Input } from 'shared/ui/Input';
import { ArticleSortSelector } from 'features/ArticleSortSelector';
import { ArticleTypeTabs } from 'features/ArticleTypeTabs';

interface ArticlesFiltersProps {
  className?: string;
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  type: ArticleType;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
  onChangeSearch: (search: string) => void;
  onChangeType: (value: ArticleType) => void;
}

export const ArticlesFilters: FC<ArticlesFiltersProps> = (props) => {
  const {
    className,
    order,
    sort,
    search,
    type,
    onChangeOrder,
    onChangeSort,
    onChangeSearch,
    onChangeType
  } = props;
  const { t } = useTranslation();

  return (
    <Card
      className={classNames(cls.ArticlesFilters, {}, [className])}
      padding='24'
    >
      <VStack gap='32'>
        <Input
          value={search}
          onChange={onChangeSearch}
          placeholder={t('Поиск')}
        />
        <ArticleTypeTabs
          className={cls.tabs}
          value={type}
          onChangeType={onChangeType}
        />
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
      </VStack>
    </Card>
  );
};
