const {getPhotosByAlbum} = require('../../db/photo')

//处理用户获取一个相册的照片列表
const getPhotos = async (ctx, next) => {
    let result = await getPhotosByAlbum(ctx.params.id, ctx.state.user._id);
    ctx.response.body = {
        code: 200,
        data: {
            nums: result.length,
            data: result
        }
    }
}

module.exports = getPhotos;