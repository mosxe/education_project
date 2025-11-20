import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundry';
import { StoreProvider } from 'app/providers/StoreProvider';
import 'shared/config/i18n/i18n';
import 'app/styles/index.scss';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Корневой узел дерева не найден');
}

const root = createRoot(container);
root.render(<BrowserRouter>
  <StoreProvider>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </StoreProvider>
</BrowserRouter>);