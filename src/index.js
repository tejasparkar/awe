import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './components/about';
import ReactDOM from 'react-dom'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.render(
  <React.StrictMode>
  <About />
  </React.StrictMode>,
  document.getElementById('main')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
