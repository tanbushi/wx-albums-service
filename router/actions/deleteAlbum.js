const {deleteById} = require('../../db/album')

const deleteAlbum = async (ctx, next) => {
    const data = await deleteById(ctx.params.id);
    ctx.response.body = {
        code: 200,
        data
    }
}

module.exports = deleteAlbum;