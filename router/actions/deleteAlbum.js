const {deleteById} = require('../../db/album')

const deleteAlbum = async (ctx, next) => {
    const data = await deleteById(ctx.params.id);
    ctx.log.info(`用户${ctx.state.user.name}删除相册${ctx.params.id}`);
    ctx.response.body = {
        code: 200,
        data
    }
}

module.exports = deleteAlbum;