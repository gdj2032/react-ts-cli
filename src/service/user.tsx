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

const logout = async () => {
  return request.post({
    path: '/user/logout',
  })
}

export {
  login,
  logout,
}
