import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {amount} from './reduce';
import './index.css';
import App from './App';
const store = createStore(amount, applyMiddleware(thunk));
function render(){
    ReactDOM.render(
        <App store = {store} />,
        document.getElementById('root')
    );
}
render();
store.subscribe(render);
