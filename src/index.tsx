import React from 'react';
import ReactDOM from 'react-dom/client';

import './assets/style/global.scss';
import './assets/style/muistyle.scss';

import { Routers } from './routers';
import { Provider } from './provider';
import { MuiThemeProvider } from './theme';
import reportWebVitals from './reportWebVitals';
import { TranslationProvider } from './translations';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <Provider>
      <TranslationProvider>
        <MuiThemeProvider>
          <Routers />
        </MuiThemeProvider>
      </TranslationProvider>
    </Provider>
  </React.StrictMode>
)

reportWebVitals();
