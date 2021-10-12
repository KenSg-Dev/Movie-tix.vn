import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'slick-carousel/slick/slick'

import './index.scss';
import App from './App';

import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import rootReducer from './redux/reducer';
import thunk from 'redux-thunk';


// import {ThemeProvider} from '@material-ui/core';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,
  composeEnhancers(applyMiddleware(thunk))
  );

  ReactDOM.render(
    <Provider store={store}>
      {/* <ThemeProvider> */}
        <App />
      {/* </ThemeProvider> */}
    </Provider>
    ,
    document.getElementById('root')
  );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
