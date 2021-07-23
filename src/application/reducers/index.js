import { combineReducers } from 'redux';
import ui from './ui';
import todos from './todos';
import user from './user';

export default combineReducers({
    ui,
    todos,
    user,
})