import { memo, useCallback } from 'react';
import { Country } from '../../model/types/country';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/ListBox';

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
    <ListBox
      value={value}
      items={optionsList}
      onChange={onChangeHandler}
      defaultValue={t('Укажите страну')}
      className={className}
      readonly={readOnly}
      direction='top right'
      label={t('Укажите страну')}
    />
  );
});