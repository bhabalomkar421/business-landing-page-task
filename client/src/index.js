import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'; 
import store from './store';
import App from './App';
import AppRouter from "../src/router/AppRouter";

store.subscribe(() => console.log(store.getState()));   

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);
