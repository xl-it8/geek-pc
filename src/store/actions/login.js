import { loginApi } from '@/api/login'
//实现异步action  一般发起ajax请求
export const login = (data) => {
    return async (dispatch) => {
        const { data: { data: tokenObj } } = await loginApi({
            mobile: data.mobile,
            code: data.code
        })
        // console.log(tokenObj, message);
        window.localStorage.setItem('token', JSON.stringify(tokenObj))
        dispatch({ type: 'LOGIN', data: tokenObj })
    }
}