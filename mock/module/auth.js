
const tokens = {
    admin: {
        token: 'admin-token'
    },
    editor: {
        token: 'editor-token'
    }
}

let login = {
    token:"eyJQ",
    user:{
        username:"admin",
        avatar:"42438345-20191024092135910.jpg",
        email:"admin@eladmin.net",
        phone:"18888888888",
        dept:"研发部",
        job:"全栈开发",
        enabled:true,
        createTime:1534986716000,
        roles:["ADMIN"]
    }
}

const vcode = {
    "img":"data:image/png;base64,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",
    "uuid":"code-key5a20263c11f14db08e9067209be745f6"
}

export default [
    // user login
    {
        url: '/auth/login',
        type: 'post',
        response: config => {
            const { username } = config.body
            login.user.username = username

            // mock error

            return {
                status: 20000,
                data: login,
                msg: 'ok'
            }

        }
    },
    {
        url: 'auth/code',
        type: 'get',
        response: _ => {
            return {
                status: 20000,
                data: vcode
            }
        }
    },
    // user logout
    {
        url: '/user/logout',
        type: 'post',
        response: _ => {
            return {
                code: 20000,
                data: 'success'
            }
        }
    }
]
