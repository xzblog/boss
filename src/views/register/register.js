/*
 * 注册
 * @Author: magical
 * @Data: 2018-01-25
 */

import  React, {Component} from 'react';
import { WingBlank, WhiteSpace, InputItem, Button, Radio} from 'antd-mobile';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';
import {register} from '../../redux/user.redux';

import T from "../../utils/utils";
import LogoImg from '../../static/imgs/logo.svg';

@connect(
    state=>state.user,
    {register}
)

class Register extends Component{

    state = {
        phone: '',
        password: '',
        userType: 'genius'
    };

    handleSubmit = () => {
        const {phone, password, userType} = this.state;
        this.props.register({
            phone: T.delSpace(phone) ,
            password: password,
            userType: userType
        })
    };

    render(){
        return(
            <div>
                {this.props.redirectTo ? <Redirect to= {this.props.redirectTo} /> : null}
                <Link to='/login' style={{position: 'absolute', top: '0.2rem',right: '0.2rem'}}>已有账号</Link>

                <div className="logo" style={{height:'2.4rem'}}>
                    <img className='app-logo' src={LogoImg} alt="logo"/>
                </div>
                {this.props.msg ? <p style={{color:'red'}}>{this.props.msg}</p> : null}
                <WingBlank>
                    <InputItem
                        type="phone"
                        placeholder="请输入手机号"
                        onChange={(v)=>{this.setState({phone: v})}}
                        clear
                    >手机号</InputItem>

                    <InputItem
                        type='password'
                        placeholder="请设置密码"
                        onChange={v=>{this.setState({password: v})}}
                    >密码</InputItem>

                    <Radio.RadioItem
                        checked={this.state.userType === 'genius'}
                        onClick={()=>{this.setState({userType: 'genius'})}}
                    >我要求职</Radio.RadioItem>
                    <Radio.RadioItem
                        checked={this.state.userType === 'boss'}
                        onClick={()=>{this.setState({userType: 'boss'})}}
                    >我要招聘</Radio.RadioItem>

                    <WhiteSpace/>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <Button onClick={this.handleSubmit}>立即注册</Button>
                </WingBlank>

            </div>
        )
    }
}
export default Register