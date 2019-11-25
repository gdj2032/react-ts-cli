import { request } from "@/request";


/**
 * 用户登录登出
 */

const login = async (data: ILoginParams) => {
  return request.post({
    path: '/user/login',
    data
  })
}

const logout = async (id: any) => {
  return request.post({
    path: '/user/logout',
    data: {id}
  })
}

export {
  login,
  logout,
}
