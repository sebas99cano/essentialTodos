import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './application/store';
import services from './infrastructure/services';
import App from "./views/routes/App";


ReactDOM.render(
    <Provider store={configureStore(services)}>
        <App />
    </Provider>,
    document.getElementById('root')
);