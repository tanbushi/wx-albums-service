const {getAlbumsById} = require('../../db/album')
const {getPhotosByAlbum} = require('../../db/photo')

//处理用户获取相册
const getAlbums = async (ctx, next) => {
    let albums = await getAlbumsById(ctx.state.user._id),
    //获取所有相册
        result = await Promise.all(albums.map(async (item) => {
            let pcs = await getPhotosByAlbum(item._id, ctx.state.user._id);
            return Object.assign({
                count: pcs.length || 0,
                fc: pcs[0] ? pcs[0].url : null
            }, item.toObject())
        }));
    //获取每个相册的照片数目和封面图片
    ctx.response.body = {
        code: 200,
        data: result
    }
}

module.exports = getAlbums