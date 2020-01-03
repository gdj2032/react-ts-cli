import { request } from "@/request";

export interface IListInfo {
  limit?: any;
  offset?: any;
}

const getShopList = async (query?: IListInfo) => {
  return request.get({
    path: '/shop/list',
    query
  })
}

export {
  getShopList,
}