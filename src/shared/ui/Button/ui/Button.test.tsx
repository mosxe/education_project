import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button';

describe('Button', () => {
  test('render component', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument()
  });

  test('component class', () => {
    render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
    screen.debug();
  });
});