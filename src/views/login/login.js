import  React, {Component} from 'react';
import { WingBlank, WhiteSpace, InputItem, Button, Toast } from 'antd-mobile';
import {connect} from 'react-redux';

import {login} from '../../redux/user.redux'
import T from '../../tool';

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
            phone:T.delSpace(value),
        });
    };

    register = () =>{
        this.props.history.push('/register');
    };

    handleChange(key,value){
        this.setState({
            [key] : value
        })
    }

    //登录
    handleSubmit(){
        const {phone, password} = this.state;
        this.props.login({phone, password})
    }

    render(){
        return(
            <div>
                <div className="logo">
                    <img className='app-logo' src={LogoImg} alt="logo"/>
                </div>
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

                    <Button type='primary' onClick={this.handleSubmit.bind(this)}>登录</Button>

                    <WhiteSpace />
                    <WhiteSpace />
                    <Button onClick={this.register}>注册</Button>
                </WingBlank>
            </div>

        )
    }
}
export default Login