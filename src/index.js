import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import reducers from './reducer';
import './config';
import './static/css/common.scss';

import Home from './views/home/home';                      //首页
import Login from './views/login/login';                   //登录
import Register from './views/register/register';          //注册
import LoginFlag from './components/loginflag/loginflag';  //判断登录页面
import BossInfo from './views/bossinfo/bossinfo';          //boss完善信息
import GeniusInfo from './views/geniusinfo/geniusinfo';    //牛人完善信息
import Dashboard from './components/dashboard/dashboard';
import Chat from './components/chat/chat';



const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));


ReactDOM.render(
    (<Provider store = {store}>
        <BrowserRouter>
           <div>
               <LoginFlag> </LoginFlag>
               <Switch>
                   <Route exact path='/' component={Home}/>
                   <Route path='/login' component={Login}/>
                   <Route path='/register' component={Register}/>
                   <Route path='/geniusinfo' component={GeniusInfo}/>
                   <Route path='/bossinfo' component={BossInfo}/>
                   <Route path='/chat/:user' component={Chat}/>
                   <Route component={Dashboard}/>
               </Switch>
           </div>
        </BrowserRouter>
    </Provider>),

    document.getElementById('root')
);

