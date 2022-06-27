import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './reducers'
//以下代码给redux工具中存一份token 以免页面刷新的时候会丢失
//写在这里是为了以后reducer统一设置初始值
const initState = {
    data: window.localStorage.getItem('token')
}
export default createStore(rootReducer, initState, composeWithDevTools(applyMiddleware(thunk)))