/*
 * 个人中心
 * @author: magical
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {WingBlank, WhiteSpace, Button} from 'antd-mobile';

import './person.scss';


@connect(
    state => state.user
)
export default class Person extends Component{
    logout = () =>{
      console.log('退出登录');
    };
    render(){
        return(
            <div className='person'>
                <div className='person-top'>
                    <div className='top-left'>
                        <h2>{this.props.userName}</h2>
                        <p className='desc'>{this.props.desc}</p>
                        <button className='redact'>编辑</button>
                    </div>
                    <div className='avator'>
                        <span></span>
                    </div>
                </div>
                <div className='person-menu'>
                    <div className='item'>
                        <i> </i>
                        <p>简历</p>
                    </div>
                    <div className='item'>
                        <i> </i>
                        <p>我的投递</p>
                    </div>
                    <div className='item'>
                        <i> </i>
                        <p>我的关注</p>
                    </div>
                    <div className='item'>
                        <i> </i>
                        <p>其他</p>
                    </div>
                </div>
                <WhiteSpace />
                <div className='person-list'>
                    <div className='item'>
                        <i className='icon'> </i>
                        <span className='title'>求职意向</span>
                        <span className='result'>暂不考虑</span>
                        <i className='arrow'> </i>
                    </div>
                    <WhiteSpace />
                    <div className='item'>
                        <i className='icon'> </i>
                        <span className='title'>收藏</span>
                        <i className='arrow'> </i>
                    </div>
                    <div className='item'>
                        <i className='icon'> </i>
                        <span className='title'>隐私</span>
                        <i className='arrow'> </i>
                    </div>
                    <div className='item'>
                        <i className='icon'> </i>
                        <span className='title'>反馈</span>
                        <i className='arrow'> </i>
                    </div>
                </div>

                <WhiteSpace />

                <WingBlank>
                    <Button onClick={this.logout}>退出登录</Button>
                </WingBlank>

                <WhiteSpace />
            </div>
        )
    }
}