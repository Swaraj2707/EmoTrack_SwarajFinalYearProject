
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App.js';
// import Store from "./static/js/redux/Store";
// import { Provider } from 'react-redux';

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={Store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // Load Calendly widget asynchronously
// const script = document.createElement('script');
// script.src = 'https://assets.calendly.com/assets/external/widget.js';
// script.async = true;
// document.body.appendChild(script);

import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.js';
import Store from "./static/js/redux/Store";
import { Provider } from 'react-redux';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Load Calendly widget asynchronously
const script = document.createElement('script');
script.src = 'https://assets.calendly.com/assets/external/widget.js';
script.async = true;
document.body.appendChild(script);

 
