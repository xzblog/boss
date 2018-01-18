/**
 * boss完善信息页
 * Created by Administrator on 2018/1/18.
 */

import React, {Component} from 'react';
import {NavBar, Icon, List, InputItem, Picker, Result, Button, WingBlank, WhiteSpace } from 'antd-mobile';


const myImg = src => <img src={src} className="spe am-icon" style={{width:'0.6rem', height:'0.6rem'}} alt="" />;
export default class BossInfo extends Component{
    render(){
        return(
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                >完善boos信息</NavBar>
                <WhiteSpace size="sm" />
                <Result
                    img={myImg('https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg')}
                    message={<div>上传头像，可以更具亲和力哦！</div>}
                />
                <InputItem
                    placeholder="请填写本人的真实姓名"
                >姓名</InputItem>
                <WhiteSpace siza="md"/>
                <InputItem
                    placeholder="您当前就职的公司"
                >我得公司</InputItem>

                <WhiteSpace siza="md"/>
                <InputItem
                    placeholder="您当前的职务"
                >我得职务</InputItem>
                <InputItem
                    placeholder="邮箱，用来接收简历"
                >我得邮箱</InputItem>

                <WhiteSpace siza="lg"/>
                <WhiteSpace siza="lg"/>

                <WingBlank size="sm">
                    <Button>完成</Button>
                </WingBlank>
            </div>
        )
    }
}

