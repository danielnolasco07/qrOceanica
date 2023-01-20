import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Previsualizacion from './App2';
// import ObtenerValores from './obtenervalores'
import './App.css';
import generarQr from "./Component/generar";


ReactDOM.render(
  <React.StrictMode>
    <App />    
    
    
    {/* <Router>      
      <div className="App">
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/generar" component={generarQr} />
        </Switch>
      </div>
    </Router> */}


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
