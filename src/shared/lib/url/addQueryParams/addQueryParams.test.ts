import { getQueryParams } from './addQueryParams';

describe('shared/url/addQueryParams', function () {
  test('test with one params', () => {
    const params = getQueryParams({ test: 'value' });

    expect(params).toBe('?test=value');
  });

  test('test with a few params', () => {
    const params = getQueryParams({ test: 'value', search: '1' });

    expect(params).toBe('?test=value&search=1');
  });

  test('test with undefined', () => {
    const params = getQueryParams({ test: 'value', search: undefined });

    expect(params).toBe('?test=value');
  });
});