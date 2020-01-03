import { request } from "@/request"

/**
 * 轮播图
 */


/**
 * 获取轮播图列表
 *
 * @returns
 */
const getCarouselList = () => {
  return request.get({
    path: '/carousel',
  })
}

export {
  getCarouselList,
}
