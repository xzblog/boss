

//合并所有reducer
import { combineReducers} from 'redux';
import {user} from  './redux/user.redux';
import {list} from  './redux/list.redux';

export default  combineReducers({user,list});