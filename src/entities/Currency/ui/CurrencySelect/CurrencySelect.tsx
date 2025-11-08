import { memo, useCallback } from 'react';
import { Currency } from '../../model/types/currency';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/ListBox';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  readOnly?: boolean;
  onChange?: (value: Currency) => void;
}

const optionsList = [
  {
    value: Currency.RUB, content: Currency.RUB
  },
  {
    value: Currency.USD, content: Currency.USD
  },
  {
    value: Currency.EUR, content: Currency.EUR
  }
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const { className, value, onChange, readOnly = false } = props;
  const { t } = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (
    <ListBox
      value={value}
      items={optionsList}
      onChange={onChangeHandler}
      defaultValue={t('Укажите валюту')}
      className={className}
      readonly={readOnly}
      direction='top'
      label={t('Укажите валюту')}
    />
  );
});