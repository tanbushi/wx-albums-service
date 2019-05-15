const koa = require('koa');
const router = require('./router')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const path = require('path')
const staticCache = require('koa-static-cache')
app = new koa();

app.use(cors({
    origin: '*'
}));
app.use(bodyParser({
    multipart: true
}));
app.use(staticCache(path.join(__dirname, './uploads'), {
    maxage: 30 * 24 * 60 * 60
}));
app.use(router.routes());

app.listen(8000);
console.log('app listen 8000');