/*
 * 判断用户是否登录
 * @author magical
 */

import React, {Component} from 'react';
import axios from 'axios';
import { withRouter} from 'react-router-dom';

@withRouter

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
                    //用户信息存在
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