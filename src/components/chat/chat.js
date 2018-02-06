

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {InputItem, List, NavBar, Icon, Grid} from 'antd-mobile';
import {sendMsg, getMsgList, replyMsg, readMsg} from "../../redux/chat.redux";

import T from '../../utils/utils';
import './chat.scss';

@connect(
    state=> state,
    {sendMsg,getMsgList,replyMsg,readMsg}
)

export default class Chat extends Component{
    state = {
        text:'',
        showEmoji: false
    };
    handleSubmit = () =>{
        this.props.sendMsg({
            from: this.props.user._id,
            to: this.props.match.params.user,
            cont: this.state.text
        });
        this.setState({text:''});  //清空信息
    };

    fixCarousel(){
        setTimeout(function(){
            window.dispatchEvent(new Event('resize'))
        },0)
    }

    componentDidMount(){
        if (!this.props.chat.msg.length) {
            this.props.getMsgList();
            this.props.replyMsg();
        }

    }
    componentWillUnmount(){
        const to = this.props.match.params.user;
        this.props.readMsg(to)
    }
    render(){
        const emojiList = '😃 😄 😁 😆 😅 😂 😊 😇 😉 😌 😍 😘 😚 😋 😜 😝 😎 😏 😒 😞 😔 😣 😖 😫 😩 😤 😠 😡 😶 😐 😲 😵 😳 😱 😨 😰 😢 😥 😭 😓 😪 😷 😈 👿 👹 👺 💩 👻 💀 ☠ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 🙏 👍 👎 👊 👌 👈 👉 👆 👇 💪 💅 💋 👅 👂 👃 👀';
        const emoji = emojiList.split(' ').filter(v=>v).map(v=>({text:v}));

        const users = this.props.chat.users;
        const toId = this.props.match.params.user;
        if(!users[toId]){
            return null
        }
        const chatId = T.getChatId(this.props.user._id,toId);
        const msg = this.props.chat.msg.filter(v=>v.chatId === chatId);
        return(
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.goBack()}
                    className='fixed-top'
                >{users[toId].name}</NavBar>
                <div className='msg-list'>
                    <ul>
                        {msg.map((v,i)=>{
                            return <li key={i}
                                       className={v.from===this.props.user._id? 'from-me': null}
                            >
                                <i className='avatar'>{users[toId].avatar}</i>
                                <span className='cont'>{v.cont}</span>
                            </li>
                        })}
                    </ul>
                </div>
                <List style={{position:'fixed', bottom:'0', left:'0', width:'100%'}}>
                    <InputItem
                        placeholder='请输入...'
                        value={this.state.text}
                        onChange={(v)=>this.setState({text: v})}
                        extra={<div>
                            <span onClick={()=>{
                                    this.setState({showEmoji: !this.state.showEmoji});
                                    this.fixCarousel();
                                }}
                                  style={{fontSize:16, marginRight:15}}
                            >😃</span>
                            <span onClick={this.handleSubmit}>发送</span></div>}
                    >
                    </InputItem>
                    {this.state.showEmoji ? <Grid data={emoji}
                                                  columnNum={9}
                                                  isCarousel={true}
                                                  carouselMaxRow={3}
                                                  onClick={(v)=>{this.setState({
                                                      text:this.state.text + v.text
                                                  })}}/>
                        : null}
                </List>
            </div>
        )

    }
}
