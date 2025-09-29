import React from 'react';
import ReactDOM from 'react-dom/client';

// WE ARE GONNA REMOVE BOOTSTRAP DOWN WITH BOOTSTRAP  
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap JS
import "bootstrap"

import App from './components/App';
import reportWebVitals from "./analytics/reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
