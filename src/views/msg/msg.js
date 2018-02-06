import React, {Component} from 'react';
import {NavBar} from 'antd-mobile';
import {connect} from 'react-redux';
import {Badge} from 'antd-mobile';

import './msg.scss';

@connect(
    state=>state
)
export default class Msg extends Component{
    getLast(arr){
        return arr[arr.length-1]
    }

    render(){
        const userId = this.props.user._id;
        const userInfo = this.props.chat.users;

        const msgGroup = {};
        this.props.chat.msg.forEach(v=>{
            msgGroup[v.chatId] = msgGroup[v.chatId] || [];
            msgGroup[v.chatId].push(v)
        });

        const chatList = Object.values(msgGroup).sort((a,b)=>{
            const a_last = this.getLast(a).create_time;
            const b_last = this.getLast(b).create_time;
            return b_last - a_last
        });
        return(
            <div>
                <NavBar  mode='light'>消息</NavBar>
                {chatList.map((v,i)=>{
                    const lastChat = this.getLast(v);
                    const targetId = v[0].from;
                    const unreadNum = v.filter(v=>!v.read&&v.to===userId).length;
                    if(!userInfo[targetId]){
                        return null;
                    }
                    return(
                        <div className='chat-item'
                             key={i}
                             onClick={()=>{
                                 this.props.history.push(`/chat/${targetId}`)
                             }}>
                            <i className='avatar'>{userInfo[targetId].avatar}</i>
                            <div className='main'>
                                <div className='name'>{userInfo[targetId].name}</div>
                                <div className='cont'>{lastChat.cont}</div>
                            </div>
                            <Badge text={unreadNum}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}