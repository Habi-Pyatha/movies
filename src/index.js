import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import reportWebVitals from './reportWebVitals';
import Movie from './components/Movie';
import Moviedetails from './components/Moviedetails';

import App from './App';
import Sidebar from './components/Sidebar';
import { Provider } from 'react-redux';
import store from './redux/store';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Movie />,
      },
      {
        path:"/movies",
        element:<Movie/>
      },
      {
        path: "/moviedetail/:movieId",
        element: <Moviedetails />
      },
      {
        path:'/sidebar',
        element:<Sidebar/>
      }
    ],
  },
  
  // {
  //   path: "/moviedetail/:movieId",
  //   element: <Moviedetails />
  // },
  // {
  //   path:'/sidebar',
  //   element:<Sidebar/>
  // }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
