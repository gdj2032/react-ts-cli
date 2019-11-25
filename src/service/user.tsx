import { request } from "@/request";


/**
 * 用户登录
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

/**
 * 用户注册
 * @param query
 */
const register = async (data: ILoginParams) => {
  return request.post({
    path: '/user/reg',
    data,
  })
}

export {
  login,
  logout,
  register,
}
