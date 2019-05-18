const log4j = require('log4js')

log4j.configure({
    appenders: {
        logs: {
            type: 'dateFile',
            filename: 'logs/app',
            pattern: '-yyyy-MM-dd.log',
            alwaysIncludePattern: true
        }
    },
    categories: {
        default: {
            appenders: ['logs'],
            level: 'info'
        }
    }
})

const logger = log4j.getLogger('logs');

module.exports = async (ctx, next) => {
    ctx.log = logger;
    await next();
}