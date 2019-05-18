const {add} = require('../../db/album')

//添加相册
const addAlbum = async (ctx, next) => {
    const {name} = ctx.request.body;
    let album = await add(ctx.state.user._id, name);
    ctx.log.info(`用户${ctx.state.user.name}添加相册${name}`);
    ctx.response.body = {
        code: 200,
        data: album
    }
}

module.exports = addAlbum