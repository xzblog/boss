/**
 * 牛人完善信息页面
 * Created by Administrator on 2018/1/18.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {update} from "../../redux/user.redux";
import {Redirect} from 'react-router-dom';
import {NavBar, List, InputItem, Picker, Result, Button, WingBlank, WhiteSpace, TextareaItem } from 'antd-mobile';

const seasons = [
    [
        {
            label: '2013',
            value: '2013',
        },
        {
            label: '2014',
            value: '2014',
        },
    ],
    [
        {
            label: '一月',
            value: '1',
        },
        {
            label: '二月',
            value: '2',
        },
        {
            label: '三月',
            value: '3',
        },
        {
            label: '四月',
            value: '4',
        },
        {
            label: '五月',
            value: '5',
        },
        {
            label: '六月',
            value: '6',
        },
        {
            label: '七月',
            value: '7',
        },
        {
            label: '八月',
            value: '8',
        },
        {
            label: '九月',
            value: '9',
        },
        {
            label: '十月',
            value: '10',
        },
        {
            label: '十一月',
            value: '11',
        },
        {
            label: '十二月',
            value: '12',
        },

    ],
];
const myImg = src => <img src={src} className="spe am-icon" style={{width:'0.6rem', height:'0.6rem'}} alt="" />;

@connect(
    state => state.user,
    {update}
)
export default class GeniusInfo extends Component{
    state = {
        userName:'',
        sex: '',
        workDate: [],
        birth: [],
        desc: ''
    };

    //更新用户信息
    handleClick = () => {
        this.props.update(this.state);
    };

    render(){
        const path = this.props.location.pathname;
        const redirect = this.props.redirectTo;
        return(
            <div>
                {redirect&&redirect!==path? <Redirect to={this.props.redirectTo}></Redirect> :null}
                <NavBar
                    mode="light"
                >完善个人信息</NavBar>
                <WhiteSpace size="sm" />
                <Result
                    img={myImg('https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg')}
                    message={<div>上传头像，简历查看率增加20%</div>}
                />
                <List>
                    <InputItem
                        placeholder="请填写本人的真实姓名"
                        onChange={v => this.setState({ userName: v })}
                    >姓名</InputItem>
                    <InputItem
                        placeholder="请先填写性别"
                        onChange={v => this.setState({ sex: v })}
                    >性别</InputItem>

                    <Picker
                        data={seasons}
                        title="出生年月"
                        cascade={false}
                        extra="请选择"
                        value={this.state.birth}
                        onChange={v => this.setState({ birth: v })}
                        onOk={v => this.setState({ birth: v })}
                    >
                        <List.Item arrow="horizontal">出生年月</List.Item>
                    </Picker>

                    <Picker
                        data={seasons}
                        title="参加工作时间"
                        cascade={false}
                        extra="请选择"
                        value={this.state.workDate}
                        onChange={v => this.setState({ workDate: v })}
                        onOk={v => this.setState({ workDate: v })}
                    >
                        <List.Item arrow="horizontal">参加工作时间</List.Item>
                    </Picker>

                    <TextareaItem
                        title='个人简介'
                        placeholder='请简单的描述下自己...'
                        rows={5}
                        count={100}
                        onChange={v => this.setState({ desc: v })}
                    />
                </List>
                <WhiteSpace siza="lg"/>
                <WhiteSpace siza="lg"/>

                <WingBlank size="sm">
                    <p style={{textAlign:'center', color:'#999'}}>创建一份微简历，高薪职位触手可得！</p>
                    <Button onClick={this.handleClick}>创建微简历</Button>
                </WingBlank>

            </div>
        )
    }
}
