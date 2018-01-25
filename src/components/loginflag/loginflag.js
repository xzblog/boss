/*
 * 判断用户是否登录
 * @Author: magical
 * @Data: 2018-01-25
 */

import {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import { withRouter} from 'react-router-dom';
import {loadData} from '../../redux/user.redux';

@withRouter
@connect(
    null,
    {loadData}
)
export default class LoginFlag extends Component{
    componentDidMount(){
        //排除登录，注册页,找回密码
        const ignorePath = ['/login','/register','/findPsw'];
        const {pathname} = this.props.location;

        if (ignorePath.includes(pathname)){
            return false
        }
        // 如果当前页面不是我们忽略的页面， 就去查询登录状态
        // 登录了 ->  拿到用户信息存在本地state
        // 未登录 ->  跳转登录
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
        return null
    }
}