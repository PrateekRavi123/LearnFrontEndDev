import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ClassCmp from './L2classcmp/ClassCmp';
import ClassCmp2 from './L2classcmp/ClassCmp2';
import reportWebVitals from './reportWebVitals';
import ClassCmp3 from './L2classcmp/ClassCmp3';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ClassCmp />
    <ClassCmp2/>
    <ClassCmp3/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
