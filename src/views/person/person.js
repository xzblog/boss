/*
 * 个人中心
 * @author: magical
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {WingBlank, WhiteSpace, Button, Modal} from 'antd-mobile';


import {logout} from "../../redux/user.redux";
import T from '../../utils/utils';
import './person.scss';


@connect(
    state => state.user,
    {logout}
)
export default class Person extends Component{
    logout = () =>{
        Modal.alert('确定要退出吗？','', [
            { text: '取消'},
            { text: '确定', onPress: () => {

                // 删除本地cookie
                T.delCookie('userId');

                // 清除本地的state,并跳转到指定页面
                this.props.logout();
            } },
        ]);
    };
    render(){
        const props = this.props;

        return props.userName ? (
            <div className='person'>
                {/*根据用户类型展示不同内容*/}
                {props.userType === 'genius' ? (
                    <div className='genius'>
                        <div className='person-top'>
                            <div className='top-left'>
                                <h2>{props.userName}</h2>
                                <p className='desc'>{props.desc}</p>
                                <button className='redact'>编辑</button>
                            </div>
                            <div className='avator'>
                                <span> 头像 </span>
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
                    </div>
                ):(
                    <div className='boss'>
                        <p>用户类型为boss，展示类容还在构思</p>
                    </div>
                )}


                <WhiteSpace />

                <WingBlank>
                    <Button onClick={this.logout}>退出登录</Button>
                </WingBlank>

                <WhiteSpace />
            </div>
        ):<Redirect to={props.redirectTo} />
    }
}