const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true,
    user: 'licong',
    pass: '27280151kl'
});

//用户数据模型
const userSchema = new mongoose.Schema({
    openId: {
      type: String,
      index: true,
      unique: true
    },
    created: {
      type: Date,
      default: Date.now()
    },
    name: {
      type: String,
      index: true
    },
    avatar: {
      type: String
    }
})

//相册数据模型
const albumSchema = new mongoose.Schema({
  userId: String,
  name: String
}, {
  versionKey: false,
  timestamps: {
    createdAt: 'created',
    updatedAt: 'updated'
  }
})

//照片数据模型
const photoSchema = new mongoose.Schema({
  userId: String,
  albumId: String,
  url: String,
}, {
  timestamps: {
    createdAt: 'created'
  }
})

module.exports = {
    User: mongoose.model('User', userSchema),
    Album: mongoose.model('album', albumSchema),
    Photo: mongoose.model('photo', photoSchema)
}