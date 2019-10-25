
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
