const {add} = require('../../db/album')

//添加相册
const addAlbum = async (ctx, next) => {
    const {name} = ctx.request.body;
    let album = await add(ctx.state.user._id, name);
    ctx.response.body = {
        code: 200,
        data: album
    }
}

module.exports = addAlbum