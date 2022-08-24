import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SomeClassComponent from './components/SomeClassComponent'
import LightSwitch from './components/LigthSwitch';
// import l  from './components/LigthSwitch'
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Header firstName="Abdoh" lastName="Ardi" />
    <SomeClassComponent />
    <LightSwitch />


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
