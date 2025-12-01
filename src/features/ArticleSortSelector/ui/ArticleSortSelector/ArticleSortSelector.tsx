import { FC, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { SelectOption } from 'shared/ui/Select/ui/Select';
import { ArticleSortField } from 'entities/Article';
import { SortOrder } from 'shared/types/sort';
import { VStack } from 'shared/ui/Stack';
import { ListBox } from 'shared/ui/Popups';
import { Text } from 'shared/ui/Text';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector: FC<ArticleSortSelectorProps> = (props) => {
  const { className, sort, order, onChangeOrder, onChangeSort } = props;
  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => {
    return [
      {
        value: 'asc',
        content: t('возрастанию')
      },
      {
        value: 'desc',
        content: t('убыванию')
      }
    ];
  }, [t]);

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => {
    return [
      {
        value: ArticleSortField.CREATED,
        content: t('дате создания')
      },
      {
        value: ArticleSortField.TITLE,
        content: t('названию')
      },
      {
        value: ArticleSortField.VIEWS,
        content: t('просмотрам')
      }
    ];
  }, [t]);

  return (
    <VStack gap='8' className={classNames('', {}, [className])}>
      <Text text={t('Сортировать по:')} />
      <ListBox items={sortFieldOptions} value={sort} onChange={onChangeSort} />
      <ListBox items={orderOptions} value={order} onChange={onChangeOrder} />
    </VStack>
  );
};
