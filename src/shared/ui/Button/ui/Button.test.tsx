import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button';

describe('Button', () => {
  test('render component', () => {
    render(<Button>1</Button>);
    expect(screen.getByText(1)).toBeInTheDocument();
  });

  test('component class', () => {
    render(<Button theme={ButtonTheme.CLEAR}>1</Button>);
    expect(screen.getByText(1)).toHaveClass('clear');
    screen.debug();
  });
});