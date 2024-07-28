import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// import './index.css';
import { GlobalStyle } from './styles/GlobalStyle.jsx';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme.jsx';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.PUBLIC_URL}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
        {/* <App /> */}
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
