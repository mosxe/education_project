import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import AppRouter from './AppRouter';
import { getRouteAbout, getRouteAdmin, getRouteProfile } from 'shared/const/router';
import { screen } from '@testing-library/react';

describe('app/router/AppRuoter', function () {
  test('Страница должна отрендериться', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAbout()
    });
    const page = await screen.findByTestId('AboutPage');
    expect(page).toBeInTheDocument();
  });

  test('Страница не найдена', async () => {
    componentRender(<AppRouter />, {
      route: '/test_test'
    });
    const page = await screen.findByTestId('NotFoundPage');
    expect(page).toBeInTheDocument();
  });

  test('Редирект неавторизованного пользователя на главную страницу', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
    });
    const page = await screen.findByTestId('MainPage');
    expect(page).toBeInTheDocument();
  });

  test('Доступ к странице авторизованного пользователя', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: {
        user: {
          authData: {
            id: '1'
          },
          _inited: true
        }
      }
    });
    const page = await screen.findByTestId('ProfilePage');
    expect(page).toBeInTheDocument();
  });

  test('Доступ запрещен (отсутствует роль)', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: {
          authData: {
            id: '1'
          },
          _inited: true
        }
      }
    });
    const page = await screen.findByTestId('ForbiddenPage');
    expect(page).toBeInTheDocument();
  });

  test('Доступ разрешен (присутствует роль)', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: {
          authData: {
            id: '1',
            roles: ['ADMIN']
          },
          _inited: true
        }
      }
    });
    const page = await screen.findByTestId('AdminPanelPage');
    expect(page).toBeInTheDocument();
  });
});