

//合并所有reducer
import { combineReducers} from 'redux';
import {user} from  './redux/user.redux';
import {list} from  './redux/list.redux';
import {chat} from  './redux/chat.redux';

export default  combineReducers({user,list,chat});