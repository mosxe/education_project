import { screen } from '@testing-library/react';
import { SideBar } from 'widgets/SideBar';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

describe('SideBar', () => {
  test('render component', () => {
    componentRender(<SideBar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
});
