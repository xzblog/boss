import React, {Component} from 'react';
import {NavBar} from 'antd-mobile';

export default class Msg extends Component{
    render(){
        return(
            <div>
                <NavBar  mode='light'>消息</NavBar>
                msg
            </div>
        )
    }
}