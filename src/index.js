import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import Activity from './Activity';
import Project from './Project';
import Person from './Person';

import {amount} from './reduce';
import './index.css';
import App from './App';

// 404
const  NoFound = () =>{
    <div>404</div>
}
const store = createStore(amount,compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

ReactDOM.render(
    (<Provider store = {store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route path='/activity' component={Activity}/>
                <Route path='/project/:id' component={Project}/>
                <Route path='/person' component={Person}/>
                <Redirect path='/404' component={NoFound}/>
            </Switch>
        </BrowserRouter>
    </Provider>),

    document.getElementById('root')
);

