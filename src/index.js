import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route, useLocation } from 'react-router-dom';
import './index.css';
import App from './App';
import { ProSidebarProvider } from "react-pro-sidebar";

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
 
      <ProSidebarProvider>
      <App />
     
      </ProSidebarProvider>
    
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);