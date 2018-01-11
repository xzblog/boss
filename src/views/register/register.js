import  React, {Component} from 'react';
import { WingBlank, WhiteSpace, InputItem, Button, Radio } from 'antd-mobile';
import {connect} from 'react-redux';

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
            userName: '',
            password: '',
            rPassword:'',
            userType: 'seeker'
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
                <div className="logo">
                    <img className='app-logo' src={LogoImg} alt="logo"/>
                </div>
                <WingBlank>
                    {this.props.msg?<p>{this.props.msg}</p>: null }
                    <InputItem onChange={v=>{this.handleChange('userName',v)}}>用户名</InputItem>
                    <InputItem
                        type='password'
                        onChange={v=>{this.handleChange('password',v)}}
                    >密码</InputItem>
                    <InputItem
                        type='password'
                        onChange={v=>{this.handleChange('rPassword',v)}}
                    >重复密码</InputItem>

                    <Radio.RadioItem
                        checked={this.state.userType === 'seeker'}
                        onClick={()=>{this.handleChange('userType','seeker')}}
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