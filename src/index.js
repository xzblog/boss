import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {BrowserRouter, Route} from 'react-router-dom';

import reducers from './reducer';
import './config';
import './static/css/common.scss';

import Login from './views/login/login';
import Register from './views/register/register';



const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

ReactDOM.render(
    (<Provider store = {store}>
        <BrowserRouter>
            <div>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
            </div>
        </BrowserRouter>
    </Provider>),

    document.getElementById('root')
);

