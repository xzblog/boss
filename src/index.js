import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {amount} from './reduce';
import './index.css';
import App from './App';


const store = createStore(amount,compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

    ReactDOM.render(
        (<Provider store = {store}>
            <App />
        </Provider>),
        
        document.getElementById('root')
    );

