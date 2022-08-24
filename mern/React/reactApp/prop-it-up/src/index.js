import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PersonCard from './component/PersonCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <PersonCard firstName="Doe" lastName="Jane" age={45} hairColor="Black" />
    <PersonCard firstName="Smith" lastName="John" age={88} hairColor="Brown" />
    <PersonCard firstName="Fillmore" lastName="Millard" age={50} hairColor="Brown" />
    <PersonCard firstName="Smith" lastName="Maria" age={62} hairColor="Brown" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
