// En tu archivo de entrada principal (por ejemplo, index.js)
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CarritoProvider } from './CarritoContext/CarritoContext.js';

ReactDOM.render(<CarritoProvider><App /></CarritoProvider>,
  document.getElementById('root')
);
