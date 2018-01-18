/**
 * 牛人完善信息页面
 * Created by Administrator on 2018/1/18.
 */

import React, {Component} from 'react';
import {NavBar, Icon, List, InputItem, Picker, Result, Button, WingBlank, WhiteSpace } from 'antd-mobile';


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
            label: '春',
            value: '春',
        },
        {
            label: '夏',
            value: '夏',
        },
        {
            label: '秋',
            value: '秋',
        },
        {
            label: '冬',
            value: '冬',
        },
    ],
];
const myImg = src => <img src={src} className="spe am-icon" style={{width:'0.6rem', height:'0.6rem'}} alt="" />;
export default class GeniusInfo extends Component{
    state = {
        sValue: ['', ''],
    };

    render(){
        return(
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                >完善个人信息</NavBar>
                <WhiteSpace size="sm" />
                <Result
                    img={myImg('https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg')}
                    message={<div>上传头像，简历查看率增加20%</div>}
                />
                <List>
                    <InputItem
                        placeholder="请填写本人的真实姓名"
                    >姓名</InputItem>
                    <InputItem
                        placeholder="请先填写性别"
                    >性别</InputItem>

                    <Picker
                        data={seasons}
                        title="参加工作时间"
                        cascade={false}
                        extra="请选择"
                        onChange={v => this.setState({ sValue: v })}
                        onOk={v => this.setState({ sValue: v })}
                    >
                        <List.Item arrow="horizontal">参加工作时间</List.Item>
                    </Picker>

                    <Picker
                        data={seasons}
                        title="出生年月"
                        cascade={false}
                        extra="请选择"
                        onChange={v => this.setState({ sValue: v })}
                        onOk={v => this.setState({ sValue: v })}
                    >
                        <List.Item arrow="horizontal">出生年月</List.Item>
                    </Picker>
                </List>
                <WhiteSpace siza="lg"/>
                <WhiteSpace siza="lg"/>
                <WhiteSpace siza="lg"/>

                <WingBlank size="sm">
                    <p style={{textAlign:'center', color:'#999'}}>创建一份微简历，高薪职位触手可得！</p>
                    <Button>创建微简历</Button>
                </WingBlank>

            </div>
        )
    }
}
