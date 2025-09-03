import { StoryFn } from '@storybook/react';
import i18n from 'shared/config/i18n/i18n';
import { I18nextProvider } from 'react-i18next';
import { Suspense } from 'react';

export const TranslationDecorator = (StoryComponent: StoryFn) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback="">
        <StoryComponent />
      </Suspense>
    </I18nextProvider>
  );
};