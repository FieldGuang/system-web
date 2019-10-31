/**
 * @author: 李胜松
 * @date: 2019/10/17
 * @desc: 路由配置
 */
import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'
Vue.use(Router)

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
// 设备管理
const deviceManage = () => import('@/views/device-manage')
// 订单管理
const Order = () => import('@/views/order/index')
// 日志管理
const deviceLog = () => import('@/views/log/deviceLog') // 设备日志
const interfaceLog = () => import('@/views/log/interfaceLog') // 接口日志
// 地图管理
const locationTypeManage = () => import('@/views/map-manage/locationType'); // 位置类型管理
const operateType = () => import('@/views/map-manage/operateType'); // 动作类型管理
// 监控平台
const monitorPlatform = () => import('@/views/monitor-platform') // 监控平台



export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login'),
    hidden: true,
    meta: {
      title: '登录',
      noCache: true
    }
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: '首页',
        meta: { title: '首页', icon: 'dashboard', noCache: true, affix: true }
      }
    ]
  },
  {
    path: '/user',
    component: Layout, // 不加重定向默认定位到index,
    name: 'user',
    meta: {title: "个人中心", icon: "system", noCache: true},
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/user/index'),
        name: '个人中心',
        meta: { title: '用户', icon: 'dev', noCache: true, affix: true },
        hidden: false
      },
    ]
  },
  {
    path: '/monitor',
    component: Layout,
    name: '监控平台',
    redirect: "noredirect",
    meta: {title: "监控平台", icon: "system", noCache: true},
    hidden: false,
    children: [
      {
        path: 'index',
        component: monitorPlatform,
        name: '监控',
        meta: { title: '监控平台', icon: 'fwb', affix: true }
      }
    ]
  },
  {
    path: '/order',
    component: Layout,
    name: '订单管理',
    redirect: "noredirect",
    meta: {title: "订单管理", icon: "system", noCache: true},
    hidden: false,
    children: [
      {
        path: 'index',
        component: Order,
        name: 'Documentation',
        meta: { title: '订单管理', icon: 'fwb', affix: true }
      }
    ]
  },
  {
    path: '/log',
    component: Layout,
    name: '日志管理',
    redirect: "noredirect",
    meta: {title: "日志管理", icon: "fwb", noCache: true},
    hidden: false,
    children: [
      {
        path: 'device',
        component: deviceLog,
        name: '设备日志',
        meta: { title: '设备日志', icon: 'fwb', affix: true }
      },
      {
        path: 'interface',
        component: interfaceLog,
        name: '接口日志',
        meta: { title: '接口日志', icon: 'fwb', affix: true }
      }
    ]
  },
  {
    path: '/map',
    component: Layout,
    name: '地理管理',
    redirect: "noredirect",
    meta: {title: "地理管理", icon: "fwb", noCache: true},
    hidden: false,
    children: [
      {
        path: 'locationType',
        component: locationTypeManage,
        name: '位置类型管理',
        meta: { title: '设备日志', icon: 'fwb', affix: true }
      },
      {
        path: 'operateType',
        component: operateType,
        name: '动作类型管理',
        meta: { title: '接口日志', icon: 'fwb', affix: true }
      }
    ]
  },
  {
    path: '/device',
    component: Layout,
    name: '设备管理',
    redirect: "noredirect",
    meta: {title: "设备管理", icon: "fwb", noCache: true},
    hidden: false,
    children: [
      {
        path: 'index',
        component: deviceManage,
        name: 'device',
        meta: { title: '设备管理', icon: 'fwb', affix: true }
      }
    ]
  }
]

const createRouter = () => new Router({
  //mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
