import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import back from './assets/back.jfif'
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: #222;
    background-image: url(${back});
    background-size: contain;
    background-position: center;
    background-blend-mode: multiply;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
