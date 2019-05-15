const crypto = require('crypto-js');

//密钥
const secret = 'licong'

//加密
const encode  = (msg) => {
    return crypto.AES.encrypt(msg, secret).toString();
}

//解密
const decode = (msg) => {
    return crypto.AES.decrypt(msg, secret).toString(crypto.enc.Utf8);
}

module.exports = {
    encode,
    decode
}