const {getPhotosByAlbum} = require('../../db/photo')

//处理用户获取一个相册的照片列表
const getPhotos = async (ctx, next) => {
    let result = await getPhotosByAlbum(ctx.params.id, ctx.state.user._id);
    ctx.log.info(`用户${ctx.state.user.name}获取相册${ctx.params.id}的照片`);
    ctx.response.body = {
        code: 200,
        data: {
            nums: result.length,
            data: result
        }
    }
}

module.exports = getPhotos;