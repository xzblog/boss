import axios from 'axios';
//reducer

const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';

const initState = {
    isAuth: false,
    msg:'',
    phone:'',
    password:'',
    userType:''
};

export function user(state =initState, action) {
    switch (action.type){
        case REGISTER_SUCCESS:
            return {...state, msg:action.msg, isAuth:true, ...action.payload};
        case LOGIN_SUCCESS:
            return {...state,isAuth:true, ...action.payload};
        case ERROR_MSG:
            return {...state, msg:action.msg, isAuth:false};
        default:
            return state
    }
}

// action

function errorMsg(msg) {
    return {msg, type:ERROR_MSG}
}

function registerSuccess(data, msg) {
    return {type:REGISTER_SUCCESS, payload: data, msg}
}
function loginSuccess(data) {
    return {type:LOGIN_SUCCESS, payload:data}
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
                dispatch(registerSuccess({phone,password,userType},res.data.msg))
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