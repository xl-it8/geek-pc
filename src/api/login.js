import request from '@/utils/request'

//登录接口
export const loginApi = (data) => request({
    method: 'POST',
    url: '/authorizations',
    data
})