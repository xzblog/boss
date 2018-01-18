import axios from 'axios';
import T from "../tool";
//reducer

const AUTH_SUCCESS = 'REGISTER_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';

const initState = {
    redirectTo:'',
    msg:'',
    phone:'',
    password:'',
    userType:''
};

export function user(state =initState, action) {
    switch (action.type){
        case AUTH_SUCCESS:
            return {...state, ...action.payload, redirectTo:T.getRedirectPath(action.payload.data), msg:action.payload.msg};
        case ERROR_MSG:
            return {...state, msg:action.msg};
        default:
            return state
    }
}

// action

function errorMsg(msg) {
    return {msg, type:ERROR_MSG}
}

function registerSuccess(data) {
    return {type:AUTH_SUCCESS, payload: data}
}
function loginSuccess(data) {
    return {type:AUTH_SUCCESS, payload:data}
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
                dispatch(registerSuccess(res.data))
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
                dispatch(loginSuccess(res.data));
            }else{
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}