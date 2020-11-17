import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routers from './Routers';
import { applyMiddleware, createStore } from 'redux';
import { reducer } from './reducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Routers/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
