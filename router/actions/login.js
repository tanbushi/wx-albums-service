const axios = require('axios');
const {appId, appSecret} = require('../../config')
const {getSessionKey} = require('../../db/user')

//处理用户登录
const login = async (ctx, next) => {
    let code = ctx.query.code,
        url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`;
    const {data} = await axios({
        url,
        methods: 'GET'
    });
    //获取openid和sessionKey
    let sessionKey = await getSessionKey(data.openid);
    ctx.response.body = {
        code: 200,
        data: {
            sessionKey
        }
    };
}

module.exports = login;