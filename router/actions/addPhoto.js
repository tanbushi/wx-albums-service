const {add} = require('../../db/photo')

//添加照片
const addPhoto = async (ctx, next) => {
    const {file} = ctx.req;
    const {id} = ctx.req.body;
    ctx.log.info(`用户${ctx.state.user.name}为相册${id}添加照片`);
    let result = await add(id, ctx.state.user._id, `http://localhost:8000/${file.filename}`, `./uploads/${file.filename}`);
    ctx.response.body = {
        code: 200,
        data: result
    }
}

module.exports = addPhoto;