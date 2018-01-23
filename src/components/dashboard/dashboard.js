/**
 * Created by Administrator on 2018/1/22.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavBar} from 'antd-mobile';
import {Switch, Route} from 'react-router-dom';

import Navigator from '../navigator/navigator'
import Genius from '../../views/genius/genius';
import Boss from '../../views/boss/boss';
import News from '../../views/news/news';
import Msg from '../../views/msg/msg';
import Person from '../../views/person/person';

@connect(
    state => state
)

export default class Dashboard extends Component{
    render(){
        const {pathname} = this.props.location;
        const navList = [{
            component:Genius, url:'/genius',  icon:'home', text:'人才', hide: this.props.user.userType === 'boss'
        },{
            component:Boss, url:'/boss',  icon:'home', text:'职位', hide: this.props.user.userType === 'genius'
        },{
            component:News, url:'/news', icon:'invest', text:'资讯'
        },{
            component:Msg, url:'/msg', icon:'discover', text:'消息'
        },{
            component:Person, url:'/person', icon:'person', text:'个人'
        }];

        return(
            <div>
                <NavBar  mode='light'>{navList.find(v=>v.url===pathname).text}</NavBar>
                <div style={{marginBottom:'0.5rem'}}>
                    <Switch>
                        {navList.map((v,i)=>(
                            <Route key={i} path={v.url} component={v.component} />
                        ))}
                    </Switch>

                </div>

                <Navigator data={navList}>  </Navigator>
            </div>
        )
    }
}
