import request from '@/utils/request'

export function searchTask(data) {
  return request({
    url: '/web/transportOrders/list',
    method: 'post',
    data
  })
}
