import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: #222;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
