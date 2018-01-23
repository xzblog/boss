/*
 * 判断用户是否登录
 * @author magical
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import { withRouter} from 'react-router-dom';
import {loadData} from '../../redux/user.redux';

@withRouter
@connect(
    null,
    {loadData}
)
class Auth extends Component{
    componentDidMount(){
        //排除登录，注册页
        const publicPath = ['/login','/register'];
        const pathname = this.props.location.pathname;

        if (publicPath.indexOf(pathname)>-1){
            return false
        }
        axios.get('/user/info').then((res)=>{
            if(res.status === 200){
                if(res.data.code === 0){
                    this.props.loadData(res.data.data)
                }else{
                    this.props.history.push('/login');
                }
            }
        });
    }
    render(){
        return <p style={{display:'none'}}>sdd</p>
    }
}

export default Auth