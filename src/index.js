import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios'
import {composeWithDevTools} from "redux-devtools-extension"
import reducers from './reducers'
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
import createSagaMiddlewere from 'redux-saga'
import rootSage from './sagas'
import './assets/main.scss';

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://rem-rest-api.herokuapp.com/api'

const sagaMiddlewere = createSagaMiddlewere()
const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddlewere)));

sagaMiddlewere.run(rootSage)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
