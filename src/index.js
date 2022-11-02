import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FormWithHook from './FormWithHook';
import FormVanillaReact from './FormVanillaReact';
import reportWebVitals from './reportWebVitals';
import MultipleSelectorForm from './MultipleSelectorForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <FormVanillaReact /> 
    < hr />
    <FormWithHook />
    <hr />
    <MultipleSelectorForm />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
