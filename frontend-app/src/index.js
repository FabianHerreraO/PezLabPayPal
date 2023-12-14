// En tu archivo de entrada principal (por ejemplo, index.js)
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CarritoProvider } from './CarritoContext/CarritoContext.js';

ReactDOM.render(
  <React.StrictMode>
    <CarritoProvider>
      <App />
    </CarritoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
