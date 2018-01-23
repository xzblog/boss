// 查询列表的redux


import axios from "axios/index";

const GET_SUCCESS = 'GET_SUCCESS';
const GET_ERROR = 'GET_ERROR';

const initState = {
    userList:[],
};

export function list (state=initState, action) {
    switch (action.type){
        case GET_SUCCESS:
            return {...state, userList: action.payload};
        case GET_ERROR:
            return{...state, msg: action.msg};
        default:
            return state
    }
}

// 获取失败
const getError = (err) => {
    return{type:GET_ERROR, msg:err}
};

// 获取成功
const getSuccess = (data) => {
    return{type:GET_SUCCESS, payload:data}
};


export function getList (type) {
    return dispatch => {
        axios.get(`user/list?type=${type}`).then((res)=>{
            if(res.status ===200 && res.data.code ===0){
                dispatch(getSuccess(res.data.data));
            }else{
                dispatch(getError(res.data.msg));
            }

        })
    }
}