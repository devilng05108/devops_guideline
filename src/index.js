import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
// import App from './App';
import WestrumQS from './pages/WestrumQS';
import DoraQS from './pages/DoraQS';
import SVTable from './pages/SVTable';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
const router = createBrowserRouter([
  {
    path: '/',
    element: <WestrumQS />,
  },
  {
    path: 'dora',
    element: <DoraQS />,
  },
  {
    path: 'table',
    element: <SVTable/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
// ReactDOM.render(
//   <BrowserRouter>
//     <App/>
//   </BrowserRouter>
// ,document.getElementById('root'));


