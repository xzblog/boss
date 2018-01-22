/**
 * boss完善信息页
 * Created by Administrator on 2018/1/18.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {NavBar, Icon, InputItem, Result, Button, WingBlank, WhiteSpace } from 'antd-mobile';
import {update} from "../../redux/user.redux";

const myImg = src => <img src={src} className="spe am-icon" style={{width:'0.6rem', height:'0.6rem'}} alt="" />;
@connect(
    state => state.user,
    {update}
)
export default class BossInfo extends Component{
    state = {
        userName: '',
        company:'',
        profession:'',
        email:''
    };

    handleChange(key,value){
        this.setState({
            [key] : value
        })
    }

    handleClick = () =>{
        this.props.update(this.state);
    }

    render(){
        const path = this.props.location.pathname;
        const redirect = this.props.redirectTo;
        return(
            <div>
                {redirect&&redirect!==path? <Redirect to={this.props.redirectTo}></Redirect> :null}
                <NavBar
                    mode="light"
                >完善boos信息</NavBar>
                <WhiteSpace size="sm" />
                <Result
                    img={myImg('https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg')}
                    message={<div>上传头像，可以更具亲和力哦！</div>}
                />
                <InputItem
                    placeholder="请填写本人的真实姓名"
                    onChange ={(v)=>{this.handleChange("userName",v)}}
                >姓名</InputItem>
                <WhiteSpace siza="md"/>
                <InputItem
                    placeholder="您当前就职的公司"
                    onChange ={(v)=>{this.handleChange("company",v)}}
                >我得公司</InputItem>

                <WhiteSpace siza="md"/>
                <InputItem
                    placeholder="您当前的职务"
                    onChange ={(v)=>{this.handleChange("profession",v)}}
                >我得职务</InputItem>
                <InputItem
                    type='email'
                    placeholder="邮箱，用来接收简历"
                    onChange ={(v)=>{this.handleChange("email",v)}}
                >我得邮箱</InputItem>

                <WhiteSpace siza="lg"/>
                <WhiteSpace siza="lg"/>

                <WingBlank size="sm">
                    <Button onClick={this.handleClick}>完成</Button>
                </WingBlank>
            </div>
        )
    }
}

