const {deleteById} = require('../../db/photo')

//删除照片
const deletePhoto = async (ctx, next) => {
    const data = await deleteById(ctx.params.id);
    ctx.response.body = {
        code: 200,
        data
    }
}

module.exports = deletePhoto;