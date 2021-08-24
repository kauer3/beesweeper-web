import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import back from './assets/back.jfif'
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: #222;
    // background-image: url(${back});
    // background-size: contain;
    // background-position: center;
    // background-blend-mode: multiply;
    .MuiDrawer-paperAnchorTop {
        top: 0;
        left: 0;
        right: 0;
        bottom: auto;
        height: auto;
        max-height: 100%;
        padding: 35px;
        background: #222;
        color: white;
        text-align: center;
        * {
          color: #999;
        }
        .MuiInputBase-input {
          width: 60px;
          // margin-right: 20px;
          text-align: center;
          color: #bbb;
        }
        .MuiOutlinedInput-notchedOutline {
          border-color: #333;
          width: 60px;
          // margin-right: 20px;
        }
    }
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
