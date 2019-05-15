const {Photo} = require('./model');

//根据albumid获取照片信息，根据更新时间降序
const getPhotosByAlbum = async (albumId, userId) => {
    return await Photo.find({
        albumId,
        userId
    }).sort({
        'created': '-1'
    })
}

//添加照片
const add = async (albumId, userId, url) => {
    return await Photo.create({
        albumId,
        userId,
        url
    })
}

//通过照片id删除照片
const deleteById = async (_id) => {
    return await Photo.remove({
        _id
    })
}

//通过相册id删除照片
const deleteByAlbum = async (albumId) => {
    return await Photo.remove({
        albumId
    })
}

module.exports = {
    getPhotosByAlbum,
    add,
    deleteById,
    deleteByAlbum
}