import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import ButtonComponent from './buttonComponent';
import FormComponent from './FormComponent';
import Example3 from './Example3';
import Mybutton from './Mybutton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ButtonComponent />
    <FormComponent />
    <Example3 /><br></br>
    <Mybutton />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
