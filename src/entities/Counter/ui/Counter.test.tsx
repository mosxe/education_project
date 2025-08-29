import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from 'entities/Counter';
import { userEvent } from '@testing-library/user-event';


describe('Counter', () => {
  test('counter text value', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('counter text value', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('counter increment', async () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    });
    await userEvent.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('counter decrement', async () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    });
    await userEvent.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});