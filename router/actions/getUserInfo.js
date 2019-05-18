const {getUserBySession} = require('../../db/user')

//处理用户获取信息
const getUserInfo = async (ctx, next) => {
    ctx.log.info(`获取用户信息，name:${ctx.state.user.name} `)
    ctx.response.body = {
        code: 200,
        data: ctx.state.user
    }
}

module.exports = getUserInfo;