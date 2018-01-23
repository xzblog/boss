import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import reducers from './reducer';
import './config';
import './static/css/common.scss';

import Login from './views/login/login';                   //登录
import Register from './views/register/register';          //注册
import Auth from './components/auth/auth';                 //判断登录页面
import BossInfo from './views/bossinfo/bossinfo';          //boss完善信息
import GeniusInfo from './views/geniusinfo/geniusinfo';    //牛人完善信息
// import Boss from './views/boss/boss';          //boss页面
// import Genius from './views/genius/genius';        //牛人页面
import Dashboard from './components/dashboard/dashboard';



const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

ReactDOM.render(
    (<Provider store = {store}>
        <BrowserRouter>
           <div>
               <Auth> </Auth>
               <Switch>
                   <Route path='/login' component={Login}/>
                   <Route path='/register' component={Register}/>
                   <Route path='/geniusinfo' component={GeniusInfo}/>
                   <Route path='/bossinfo' component={BossInfo}/>
                   <Route component={Dashboard}/>
               </Switch>
           </div>
        </BrowserRouter>
    </Provider>),

    document.getElementById('root')
);

