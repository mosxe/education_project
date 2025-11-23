import { FC } from 'react';
import { Button } from 'shared/ui/Button';
import { useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useTranslation } from 'react-i18next';

export const Counter: FC = () => {
  const counterValue = useCounterValue();
  const { add, increment, decrement } = useCounterActions();
  const { t } = useTranslation();

  const handleInc = () => {
    increment();
  };

  const handleDec = () => {
    decrement();
  };

  const handleAddFive = () => {
    add(5);
  };

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button onClick={handleAddFive} data-testid="decrement-btn-5">{t('Добавить 5')}</Button>
      <Button onClick={handleInc} data-testid="increment-btn">{t('increment')}</Button>
      <Button onClick={handleDec} data-testid="decrement-btn">{t('decrement')}</Button>
    </div>
  );
};