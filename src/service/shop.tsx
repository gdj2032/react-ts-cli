import { request } from "@/request";

export interface ListInfo {
  id: any;
  limit: any;
  offset: any;
}

const ShopList = async (query: ListInfo) => {
  return request.get({
    path: '/shop/list',
    query
  })
}

export {
  ShopList,
}