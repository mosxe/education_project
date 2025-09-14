import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select';
import { Country } from '../../model/types/country';
import { useTranslation } from 'react-i18next';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  readOnly?: boolean;
  onChange?: (value: Country) => void;
}

const optionsList = [
  {
    value: Country.Armenia, content: Country.Armenia
  },
  {
    value: Country.Belarus, content: Country.Belarus
  },
  {
    value: Country.Russian, content: Country.Russian
  }
];

export const CountrySelect = memo((props: CountrySelectProps) => {
  const { className, value, onChange, readOnly = false } = props;
  const { t } = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);

  return (
    <Select
      className={classNames('', {}, [className])}
      label={t('Укажите страну')}
      value={value}
      onChange={onChangeHandler}
      options={optionsList}
      readOnly={readOnly}
    />
  );
});