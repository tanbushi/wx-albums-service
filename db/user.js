const {User} = require('./model');
const {encode, decode} = require('../crypto')

//根据openid获取用户，没有则创建用户
const getUserByOpenId = async (openId) => {
    let users = await User.find({
        openId
    });
    if(users.length){
        return users[0];
    }
    return null;
}

//获取用户的登录凭证
const getSessionKey = async (openId) => {
    let user = await getUserByOpenId(openId);
    if(!user){
        user = await User.create({
            openId
        })
    }
    let id = user._id,
        sessionKey = encode(id + '');
    User.update({
        _id: id
    }, {
        lastLogin: Date.now()
    });
    return sessionKey;
}

//根据凭证获取用户
const getUserBySession = async (sessionKey) => {
    let _id = decode(sessionKey);
    let users = await User.find({
        _id
    });
    if(users.length){
        return users[0];
    }
    return null;
}

//更新用户信息
const updateInfo = async (_id, data) => {
    return User.update({
        _id
    }, data);
}

module.exports = {
    getSessionKey,
    getUserBySession,
    updateInfo
}
