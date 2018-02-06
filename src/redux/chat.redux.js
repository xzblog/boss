import axios from 'axios';
import io from "socket.io-client";

//与服务器建立链接
const socket = io('ws://localhost:9093');

//消息列表
const MSG_LIST = 'MSG_LIST';
// 读取信息
const MSG_RECV = 'MSG_RECV';
// 标识已读
const MSG_READ = 'MSG_READ';

const initState ={
    msg:[],
    users:{},
    unread:0
};

export function chat(state=initState, action) {
    switch (action.type){
        case MSG_LIST:
            return {...state,users:action.payload.users, msg:action.payload.msg, unread:action.payload.msg.filter(v=>!v.read&&v.to===action.payload.userId).length};
        case MSG_RECV:
            const n = action.payload.msg.to === action.payload.userId ? 1 : 0;
            return{...state,msg:[...state.msg, action.payload.msg], unread: state.unread + n};
        case MSG_READ:
            const {from, num} = action.payload;
            return {...state, msg:state.msg.map(v=>({...v,read:from===v.from?true:v.read})), unread:state.unread-num};
        default:
            return state

    }
}

// action
function msgList(msg,users,userId) {
    return {type:MSG_LIST,payload:{msg,users,userId}}
}

function recvMsg(msg,userId) {
    return {type:MSG_RECV,payload:{msg,userId}}
}
function msgRead({userId,from, num }) {
    return {type:MSG_READ, payload:{userId,from, num}}
}




//发送信息
export function sendMsg({from, to, cont}) {
    return dispatch=>{
        socket.emit('message', {from,to,cont});
    }
}

//接受别人给自己的发的消息
export function replyMsg() {
    return (dispatch, getState) =>{
        socket.on('replyMsg', (msg)=>{
            const userId = getState().user._id;
            dispatch(recvMsg(msg,userId))
        });
    }
}

//阅读消息
export function readMsg(from){
    return (dispatch, getState) => {
        axios.post('/user/readmsg',{from}).then(res=>{
            if(res.status === 200 && res.data.code === 0){
                const userId = getState().user._id;
                dispatch(msgRead({userId,from,num:res.data.num}))
            }
        })
    }
}


//获取聊天列表
export function getMsgList() {
    return (dispatch,getState)=>{
        axios.get('/user/msglist').then(res=>{
            if(res.status === 200 && res.data.code === 0){
                const userId = getState().user._id;
                dispatch(msgList(res.data.msg, res.data.users, userId))
            }
        });
    }
}
