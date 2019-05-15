const {updateInfo} = require('../../db/user');

//处理用户更新信息
const updateUserInfo = async (ctx, next) => {
    //根据userid更新信息
    await updateInfo(ctx.state.user._id, ctx.request.body);
    ctx.response.body = {
        code: 200,
    }
}

module.exports = updateUserInfo;