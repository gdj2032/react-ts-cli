import { request } from "@/request";

export interface IUpdatePwd {
  oldPassword: string;
  newPassword: string;
}

/**
 * 获取用户信息
 */
const getUserInfo = async () => {
  return request.post({
    path: '/userInfo',
  })
}

/**
 * 用户登录
 */
const login = async (data: ILoginParams) => {
  return request.post({
    path: '/user/login',
    data
  })
}

/**
 * 登出
 * @param {*} id
 * @returns
 */
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
    path: '/user/register',
    data,
  })
}

/**
 * 修改密码
 *
 * @param {ILoginParams} data
 * @returns
 */
const updatePwd = async (data: IUpdatePwd) => {
  return request.post({
    path: '/user/updatePwd',
    data,
  })
}


export {
  getUserInfo,
  login,
  logout,
  register,
  updatePwd,
}
