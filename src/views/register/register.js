import  React, {Component} from 'react';
import { WingBlank, WhiteSpace, InputItem, Button, Radio } from 'antd-mobile';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {register} from '../../redux/user.redux';

import LogoImg from '../../static/imgs/logo.svg';

@connect(
    state=>state.user,
    {register}
)

class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            phone: '',
            password: '',
            rPassword:'',
            userType: 'genius'
        }
    }

    handleChange (key,value){
        this.setState({
            [key]: value
        })
    }

    handleSubmit(){
        this.props.register(this.state)
    }


    render(){
        return(
            <div>
                {this.props.redirectTo ? <Redirect to= {this.props.redirectTo} /> : null}
                <div className="logo">
                    <img className='app-logo' src={LogoImg} alt="logo"/>
                </div>
                <WingBlank>
                    {this.props.msg?<p>{this.props.msg}</p>: null }
                    <InputItem onChange={v=>{this.handleChange('phone',v)}}>用户名</InputItem>
                    <InputItem
                        type='password'
                        onChange={v=>{this.handleChange('password',v)}}
                    >密码</InputItem>
                    <InputItem
                        type='password'
                        onChange={v=>{this.handleChange('rPassword',v)}}
                    >重复密码</InputItem>

                    <Radio.RadioItem
                        checked={this.state.userType === 'genius'}
                        onClick={()=>{this.handleChange('userType','genius')}}
                    >我要求职</Radio.RadioItem>
                    <Radio.RadioItem
                        checked={this.state.userType === 'boss'}
                        onClick={()=>{this.handleChange('userType','boss')}}
                    >我要招聘</Radio.RadioItem>

                    <WhiteSpace/>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <Button onClick={this.handleSubmit.bind(this)}>立即注册</Button>
                </WingBlank>

            </div>
        )
    }
}
export default Register