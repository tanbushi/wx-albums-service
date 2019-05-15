const {Album} = require('./model');
const {deleteByAlbum} = require('./photo')

//根据userid获取相册信息，按更新时间降序
const getAlbumsById = async (userId) => {
    return await Album.find({
        userId
    }).sort({
        'created': '-1'
    })
}

//添加相册
const add = async (userId, name) => {
    return await Album.create({
        userId,
        name
    })
}

//删除相册
const deleteById = async (_id) => {
    //删除相册里的照片
    await deleteByAlbum(_id);
    return await Album.remove({
        _id
    })
}

module.exports = {
    getAlbumsById,
    add,
    deleteById
}