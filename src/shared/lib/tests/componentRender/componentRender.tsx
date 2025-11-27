import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';

export interface componentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

interface TestProviderProps {
  children: ReactNode;
  options?: componentRenderOptions;
}

export const TestProvider = (props: TestProviderProps) => {
  const { children, options = {} } = props;
  const {
    route = '/',
    initialState,
    asyncReducers
  } = options;

  return (
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState} asyncReducers={asyncReducers}>
        <I18nextProvider i18n={i18nForTests}>
          {children}
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  );
};

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
  return render(
    <TestProvider options={options}>{component}</TestProvider>
  );
}