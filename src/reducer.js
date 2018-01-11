

//合并所有reducer
import { combineReducers} from 'redux';
import {user} from  './redux/user.redux';

export default  combineReducers({user});