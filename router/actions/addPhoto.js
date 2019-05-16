const {add} = require('../../db/photo')

//添加照片
const addPhoto = async (ctx, next) => {
    const {file} = ctx.req;
    const {id} = ctx.req.body;
    let result = await add(id, ctx.state.user._id, `http://localhost:8000/${file.filename}`, `./uploads/${file.filename}`);
    ctx.response.body = {
        code: 200,
        data: result
    }
}

module.exports = addPhoto;