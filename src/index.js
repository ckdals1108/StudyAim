import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './component/main/main'
import { BrowserRouter } from "react-router-dom";
import Axios from './axios/axios';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </React.StrictMode>
);
