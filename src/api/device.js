import request_remote from '@/utils/request_remote'
export function getDeviceList() { // 获取设备列表
	return request_remote({
		url: '11/web/vehicles/list',
		method: 'post'
	})
}
