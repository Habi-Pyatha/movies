import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter, Routes, Route } from 'react-router-dom'; // Import HashRouter

import reportWebVitals from './reportWebVitals';
import Movie from './components/Movie';
import Moviedetails from './components/Moviedetails';

import App from './App';
import Sidebar from './components/Sidebar';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Movie />} />
            <Route path="/movies" element={<Movie />} />
            <Route path="/moviedetail/:movieId" element={<Moviedetails />} />
            <Route path="/sidebar" element={<Sidebar />} />
          </Route>
        </Routes>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
