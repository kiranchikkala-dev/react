import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';

import './index.css';
import Challenges from './pages/Challenges';

const router = createHashRouter([
  {
    path: '/:id',
    element: <Challenges />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
