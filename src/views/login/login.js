import  React, {Component} from 'react';
import { WingBlank, WhiteSpace, InputItem, Button, Toast } from 'antd-mobile';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import {login} from '../../redux/user.redux'
import T from '../../utils/utils';

import LogoImg from '../../static/imgs/logo.svg';

import './login.scss';

@connect(
    state=>state.user,
    {login}
)

class Login extends Component{

    state = {
        hasError: false,
        phone: '',
    };

    onErrorClick = () => {
        if (this.state.hasError) {
            Toast.info('手机号码格式有误');
        }
    };

    onChange = (value) => {
        if (T.delSpace(value).length < 11) {
            this.setState({
                hasError: true,
            });
        } else {
            this.setState({
                hasError: false,
            });
        }
        this.setState({
            phone:value,
        });
    };

    handleChange(key,value){
        this.setState({
            [key] : value
        })
    }

    //登录
    handleSubmit(){
        const {phone, password} = this.state;
        this.props.login({
            phone:T.delSpace(phone),
            password})
    }

    render(){
        const path = this.props.location.pathname;
        const redirect = this.props.redirectTo;
        return(
            <div>
                {redirect&&redirect!==path? <Redirect to={redirect} /> :null}
                <div className="logo">
                    <img className='app-logo' src={LogoImg} alt="logo"/>
                </div>
                {this.props.msg ? <p style={{color:'red'}}>{this.props.msg}</p> : null }
                <WingBlank size='lg'>
                    <InputItem
                        type="phone"
                        placeholder="请输入手机号"
                        error={this.state.hasError}
                        onErrorClick={this.onErrorClick}
                        value={this.state.phone}
                        onChange={this.onChange}
                    >手机号</InputItem>

                    <WhiteSpace />

                    <InputItem
                        type="password"
                        placeholder="请输入密码"
                        onChange ={(v)=>{this.handleChange("password",v)}}
                    >密码</InputItem>

                    <WhiteSpace />
                    <WhiteSpace />
                    <WhiteSpace />
                    <WhiteSpace />
                    <Link style={{textAlign:'center',display:'block',color:'#666'}} to='/register'>没有账号？立即注册</Link>
                    <WhiteSpace />
                    <WhiteSpace />
                    <Button type='primary' onClick={this.handleSubmit.bind(this)}>登录</Button>
                </WingBlank>
            </div>

        )
    }
}
export default Login