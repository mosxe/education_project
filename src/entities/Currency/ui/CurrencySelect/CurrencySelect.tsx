import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select';
import { Currency } from '../../model/types/currency';
import { useTranslation } from 'react-i18next';

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
    <Select
      className={classNames('', {}, [className])}
      label={t('Укажите валюту')}
      value={value}
      onChange={onChangeHandler}
      options={optionsList}
      readOnly={readOnly}
    />
  );
});