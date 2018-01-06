import  React, {Component} from 'react';
import { WingBlank, WhiteSpace, InputItem, Button } from 'antd-mobile';
import LogoImg from '../../static/imgs/logo.svg';

import './login.scss';

class Login extends Component{
    register = () =>{
        console.log(this.props);
        this.props.history.push('/register');
    };

    render(){
        return(
            <div>
                <div className="logo">
                    <img className='app-logo' src={LogoImg} alt="logo"/>
                </div>
                <WingBlank size='lg'>
                    <InputItem>密码</InputItem>
                    <WhiteSpace />
                    <InputItem>手机号</InputItem>

                    <WhiteSpace />
                    <WhiteSpace />
                    <WhiteSpace />
                    <WhiteSpace />

                    <Button type='primary'>登录</Button>

                    <WhiteSpace />
                    <WhiteSpace />
                    <Button onClick={this.register}>注册</Button>
                </WingBlank>
            </div>

        )
    }
}
export default Login