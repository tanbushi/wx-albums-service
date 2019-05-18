const {getUserBySession}  = require('../db/user');

//判断用户是否登录的中间件，保存用户信息到中间状态
const auth = async (ctx, next) => {
    let sessionKey = ctx.request.headers['x-session'];
    if(sessionKey){
        let user = await getUserBySession(sessionKey);
        if(user === null){
            ctx.log.error('无法根据sessionkey获取到用户')
            ctx.throw(401, 'sessionkey无效');
        }
        ctx.state.user = user
    }
    await next();
}

module.exports = auth;