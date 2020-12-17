import request from '@/utils/request'

export function getRouters(params) {
  return request({
    url: 'getRouters',
    method: 'get',
    params
  })
}