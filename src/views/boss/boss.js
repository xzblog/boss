import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Card, WingBlank, WhiteSpace, NavBar } from 'antd-mobile';

import {getList} from "../../redux/list.redux";

@connect(
    state=>state,
    {getList}
)

export default class Boss extends Component{
    componentDidMount(){
        this.props.getList('genius');
    }
    render(){
        const list = this.props.list.userList;
        return(
            <div>
                <NavBar  mode='light'>人才</NavBar>
                <WingBlank size="md">
                    <WhiteSpace size="md"/>
                    {
                        list.length ? list.map((v, i)=>(
                            <Card key={i}>
                                <Card.Header
                                    title={v.userName}
                                    thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
                                    extra={<span>前端</span>}
                                />
                                <Card.Body>
                                    <div>{v.desc}</div>
                                </Card.Body>
                                <Card.Footer content={<span>年龄：{v.birth}</span>} extra={<div>工作经验：{v.workDate}</div>} />
                            </Card>
                        )):'暂无数据'

                    }
                </WingBlank>
            </div>
        )
    }
}