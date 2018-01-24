import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Card, WingBlank, WhiteSpace, NavBar } from 'antd-mobile';

import {getList} from "../../redux/list.redux";

@connect(
    state=>state,
    {getList}
)

export default class Genius extends Component{
    componentDidMount(){
        this.props.getList('boss');
    }
    render(){
        const list = this.props.list.userList;
        return(
            <div>
                <NavBar  mode='light'>职位</NavBar>
                <WingBlank size="md">
                    <WhiteSpace size="md" />
                    {
                        list.length ? list.map((v, i)=>(
                            <Card key={i}>
                                <Card.Header
                                    title={v.company}
                                    thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
                                    extra={<span>前端</span>}
                                />
                                <Card.Body>
                                    <div>准备放职位介绍</div>
                                </Card.Body>
                                <Card.Footer content={<span style={{fontSize:'0.12rem'}}>工作年限：1-3年</span>} extra={<div style={{fontSize:'0.12rem'}}>地址：杭州江干区华润大厦</div>} />
                            </Card>)) : '暂无数据'

                    }
                </WingBlank>
            </div>
        )
    }
}