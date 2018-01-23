import axios from 'axios';
import T from "../tool";
//reducer

const AUTH_SUCCESS = 'REGISTER_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';
const LOAD_DATA = 'LOAD_DATA';

const initState = {
    redirectTo:'',
    msg:'',
    phone:'',
    userType:''
};

export function user(state =initState, action) {
    switch (action.type){
        case AUTH_SUCCESS:
            return {...state, ...action.payload.data, redirectTo:T.getRedirectPath(action.payload.data), msg:action.payload.msg};
        case ERROR_MSG:
            return {...state, msg:action.msg};
        case LOAD_DATA:
            return {...state, ...action.payload};
        default:
            return state
    }
}

// action
// 失败之后的操作
function errorMsg(msg) {
    return {msg, type:ERROR_MSG}
}
// 成功之后操作
function handleSuccess(data) {
    return {type:AUTH_SUCCESS, payload: data}
}
//用于查询是否登录之后设置state
export function loadData(userinfo){
    return { type:LOAD_DATA, payload:userinfo}
}


//更新
export function update(obj) {
    return dispatch => {
        axios.post('/user/update', obj).then( res => {
            if(res.status === 200 && res.data.code === 0){
                dispatch(handleSuccess(res.data));
            }else {
                dispatch(errorMsg(res.data.msg));
            }
        })
    }
}


//注册
export function register(obj) {
    const {phone, password, rPassword, userType}= obj;
    if(!phone || !password){
        return errorMsg('用户名或密码不能为空');
    }
    if(password !== rPassword){
        return errorMsg('两次密码不一致！');
    }
    return dispatch =>{
        axios.post('/user/register', {phone,password,userType}).then(res=>{
            if(res.status === 200 && res.data.code ===0){
                dispatch(handleSuccess(res.data))
            }else{
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}

// 登录
export function login(obj) {
    const {phone, password} = obj;
    if(!phone || ! password){
        return errorMsg('用户名或密码不能为空')
    }
    return dispatch =>{
        axios.post('/user/login',{phone, password}).then( res =>{
            if(res.status ===200 && res.data.code === 0){
                dispatch(handleSuccess(res.data));
            }else{
                dispatch(errorMsg(res.data.msg));
            }
        })
    }
}