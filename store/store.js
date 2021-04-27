import {createStore} from 'redux'
import CountReducer from '../reducers/CountReducer';
import TodoReducer from '../reducers/TodoReducer';
import ForumReducer from '../reducers/ForumReducer'
const store = createStore(ForumReducer);
// const todoStore = createStore(TodoReducer);
export {store};