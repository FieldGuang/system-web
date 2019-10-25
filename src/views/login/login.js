// import { encrypt } from '@/utils/rsaEncrypt'
import Config from '@/config'
import { getCodeImg } from '@/api/login'
import Cookies from 'js-cookie'
export default {
    name: 'Login',
    data() {
        return {
            codeUrl: '',
            cookiePass: '',
            loginForm: {
                username: 'admin',
                password: '123456',
                rememberMe: false,
                code: '',
                uuid: ''
            },
            loginRules: {
                username: [{required: true, trigger: 'blur', message: '用户名不能为空'}],
                password: [{required: true, trigger: 'blur', message: '密码不能为空'}]
                // code: [{ required: true, trigger: 'change', message: '验证码不能为空' }]
            },
            loading: false,
            redirect: undefined
        }
    },
    watch: {
        $route: {
            handler: function (route) {
                this.redirect = route.query && route.query.redirect
            },
            immediate: true
        }
    },
    created() {
        // this.getCode()
        this.getCookie()
    },
    methods: {
        getCode() {
            getCodeImg().then(res => {
                this.codeUrl = 'data:image/gif;base64,' + res.img
                this.loginForm.uuid = res.uuid
            })
        },
        getCookie() {
            const username = Cookies.get('username')
            let password = Cookies.get('password')
            const rememberMe = Cookies.get('rememberMe')
            // 保存cookie里面的加密后的密码
            this.cookiePass = password === undefined ? '' : password
            password = password === undefined ? this.loginForm.password : password
            this.loginForm = {
                username: username === undefined ? this.loginForm.username : username,
                password: password,
                rememberMe: rememberMe === undefined ? false : Boolean(rememberMe),
                code: ''
            }
        },
        handleLogin() {
            this.$refs.loginForm.validate(valid => {
                const user = {
                    username: this.loginForm.username,
                    password: this.loginForm.password,
                    rememberMe: this.loginForm.rememberMe,
                    code: this.loginForm.code,
                    uuid: this.loginForm.uuid
                }
                // if (user.password !== this.cookiePass) {
                //      user.password = encrypt(user.password)
                // }
                if (valid) {
                    this.loading = true
                    if (user.rememberMe) {
                        Cookies.set('username', user.username, {expires: Config.passCookieExpires})
                        Cookies.set('password', user.password, {expires: Config.passCookieExpires})
                        Cookies.set('rememberMe', user.rememberMe, {expires: Config.passCookieExpires})
                    } else {
                        Cookies.remove('username')
                        Cookies.remove('password')
                        Cookies.remove('rememberMe')
                    }
                    console.log('to log')
                    this.$store.dispatch('Login', user).then(() => {
                        this.loading = false
                        console.log('okkk')
                        this.$router.push({path: this.redirect || '/'})
                    }).catch((e) => {
                        console.log(e)
                        this.loading = false
                        // this.getCode()
                    })
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        }
    }
}
