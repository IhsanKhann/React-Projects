import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import Jobsearch from './pages/Jobsearch';
import Resumebuilder from './pages/Resumebuilder';
import Tracker from './pages/Tracker';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'JobSearch',
        element: <Jobsearch />
      },
      {
        path: 'ResumeBuilder',
        element: <Resumebuilder />
      },
      {
        path: 'Tracker',
        element: <Tracker />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);