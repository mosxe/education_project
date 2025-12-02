import { memo, useCallback } from 'react';
import { Country } from '../../model/types/country';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/Popups';
import { HStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  readOnly?: boolean;
  onChange?: (value: Country) => void;
}

const optionsList = [
  {
    value: Country.Armenia,
    content: Country.Armenia
  },
  {
    value: Country.Belarus,
    content: Country.Belarus
  },
  {
    value: Country.Russian,
    content: Country.Russian
  }
];

export const CountrySelect = memo((props: CountrySelectProps) => {
  const { className, value, onChange, readOnly = false } = props;
  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange]
  );

  return (
    <HStack gap='8'>
      <Text text={t('Укажите страну')} />
      <ListBox
        value={value}
        items={optionsList}
        onChange={onChangeHandler}
        className={className}
        readonly={readOnly}
        direction='top right'
      />
    </HStack>
  );
});
