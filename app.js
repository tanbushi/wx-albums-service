const koa = require('koa');
const router = require('./router')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const path = require('path')
const staticServer = require('koa-static')
const log = require('./middleware/log')
app = new koa();

app.use(log);
app.use(cors({
    origin: '*'
}));
app.use(bodyParser({
    multipart: true
}));
app.use(staticServer(path.resolve(__dirname, './uploads'), {
    maxage: 30 * 24 * 60 * 60
}));
app.use(router.routes());

app.listen(8000);
console.log('app listen 8000');