import React, {Component} from 'react';
import {NavBar} from 'antd-mobile';
export default class News extends Component{
    render(){
        return(
            <div>
                <NavBar  mode='light'>资讯</NavBar>
                news
            </div>
        )
    }
}