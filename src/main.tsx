import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Containers/App';
import { StoreProvider } from './Provider';
import './index.css';
import Routes from './Containers';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </StoreProvider>
  </React.StrictMode>
);
