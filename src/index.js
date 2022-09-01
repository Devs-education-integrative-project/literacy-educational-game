import React from 'react';
import ReactDOM from 'react-dom/client';
import MyRoutes from './routes';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <MyRoutes />
  </React.StrictMode>
);