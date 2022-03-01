import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let startApp = () => {
  ReactDOM.render(
    <React.strictmode>
      <App />
    </React.strictmode>,
    document.getElementById('root')
  );
}

if(!window.cordova) {
  startApp()
} else {
  document.addEventListener('deviceready', startApp, false)
}

reportWebVitals();

