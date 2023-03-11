import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className=" animate-[wiggle_50s_linear_infinite]  z-50  absolute  bg-purple-ball w-[83px] h-[83px] blur-[2px] shadow-[3px,6px,27px,-10px,rgb(223,125,125/25%)] rounded-[50%] filter-none " ></div>
    <div className=" animate-[wiggle2_50s_linear_infinite]  z-50  absolute  bg-red-ball w-[60px] h-[60px] blur-[2px] shadow-[3px,6px,27px,-10px,rgb(223,125,125/25%)] rounded-[50%] filter-none " ></div>
    <div className=" animate-[wiggle3_50s_linear_infinite]  z-50  absolute  bg-red-ball w-[28px] h-[28px] blur-[2.5px] shadow-[3px,6px,27px,-10px,rgb(223,125,125/25%)] rounded-[50%] filter-none " ></div>
    <div className='red-light'></div>
    <div className='purple-light'></div>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);