import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from '../src/styles/GlobalStyle';
import Typography from '../src/styles/Typography';
import MessengerCustomerChat from 'react-messenger-customer-chat';
ReactDOM.render(
  <>
    <GlobalStyles />
    <Typography />
    <App />
    <MessengerCustomerChat pageId='108043337670014' appId='826180847999569' />
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
