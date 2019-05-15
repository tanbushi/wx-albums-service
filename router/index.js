const Router = require('koa-router');
const login = require('./actions/login')
const getUserInfo = require('./actions/getUserInfo');
const updateUserInfo = require('./actions/updateUserInfo');
const getAlbums = require('./actions/getAlbums')
const auth = require('../middleware/auth');
const addAlbum = require('./actions/addAlbum')
const getPhotos = require('./actions/getPhotos')
const addPhoto = require('./actions/addPhoto')
const deletePhoto = require('./actions/deletePhoto')
const deleteAlbum = require('./actions/deleteAlbum')
const multer = require('koa-multer')
const path = require('path')
const uuid = require('uuid')
let router = new Router();

//koa-multer配置
const storage = multer.diskStorage({
    destination: path.join(__dirname, '../uploads'),
    filename (req, file, cb) {
        const ext = path.extname(file.originalname);
        cb(null, uuid.v4() + ext);
    }
})
const uploader = multer({
    storage
})

//用户登录获取sessionKey
router.get('/login', login);

//获取用户信息
router.get('/getUserInfo', auth, getUserInfo);

//更新用户信息
router.put('/updateUserInfo', auth, updateUserInfo);

//获取用户相册
router.get('/getAlbums', auth, getAlbums)

//添加相册
router.post('/addAlbum', auth, addAlbum)

//获取一个相册的照片列表
router.get('/getPhotos/:id', auth, getPhotos)

//添加照片
router.post('/addPhoto', auth, uploader.single('file'), addPhoto)

//删除照片
router.del('/deletePhoto/:id', auth, deletePhoto)

//删除相册
router.del('/deleteAlbum/:id', auth, deleteAlbum)

module.exports = router;