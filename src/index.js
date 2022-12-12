import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/reset.css';
import App from './App';
import './i18n.js';

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>,
  document.getElementById('root')
);
