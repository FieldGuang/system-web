import { login, getInfo } from '@/api/login'
import { setToken, removeToken } from '@/utils/auth'
// import { decrypt } from '@/utils/rsaEncrypt'

const user = {
  state: {
     //token: getToken(),
     token: '',
     user: {},
     roles: [],
     avator: process.env.VUE_APP_BASE_API,
     // 第一次加载菜单时用到
     loadMenus: false
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USER: (state, user) => {
      state.user = user
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_LOAD_MENUS: (state, loadMenus) => {
      state.loadMenus = loadMenus
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username
      // const password = decrypt(userInfo.password)
      const password = userInfo.password
      const code = userInfo.code
      const uuid = userInfo.uuid
      const rememberMe = userInfo.rememberMe
      return new Promise(( resolve, reject ) => {
        login(username, password, code, uuid).then(res => {
          setToken(res.data.token, rememberMe)
          commit('SET_TOKEN', res.data.token)
          console.log(res.data.token)
          //setUserInfo(res.data.user, commit)
          // 第一次加载菜单时用到， 具体见 src 目录下的 permission.js
          //commit('SET_LOAD_MENUS', true)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getInfo().then(res => {
          setUserInfo(res, commit)
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit }) {
      return new Promise((resolve) => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        removeToken()
        resolve()
      })
    },
    // 从服务端拉取菜单
    // updateLoadMenus({ commit }) {
    //   return new Promise((resolve, reject) => {
    //     commit('SET_LOAD_MENUS', false)
    //   })
    // }
  }
}

export const setUserInfo = (res, commit) => {
  // 如果没有任何权限，则赋予一个默认的权限，避免请求死循环
  if (res.roles.length === 0) {
    commit('SET_ROLES', ['ROLE_SYSTEM_DEFAULT'])
  } else {
    commit('SET_ROLES', res.roles)
  }
  commit('SET_USER', res)
}

export default user
