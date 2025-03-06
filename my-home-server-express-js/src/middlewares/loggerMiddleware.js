/**
 * 创建时间: 2025-03-06
 * 作者: jjq
 * 描述: 日志中间件
 */

// 引入日志框架
const log4js = require('log4js');
// 引入dayjs
const dayjs = require('dayjs');

// 配置 log4js
log4js.configure({
  appenders: {
    out: {
      type: 'stdout',
      layout: {
        type: 'pattern',
        pattern: '[%d] [%p] %m' // 添加时间戳和日志级别
      }
    },
    file: {
      type: 'file',
      filename: 'logs/app.log',
      pattern: '.yyyy-MM-dd', // 轮转模式
      alwaysIncludePattern: true, // 确保轮转时包含模式
      keepFileExt: true, // 保持文件扩展名
      maxLogSize: 104857600, // 100MB
      backups: 5, // 保留5个备份
      compress: true // 压缩备份文件
    }
  },
  categories: {
    default: { appenders: ['out', 'file'], level: 'info' }
  }
});

// 日志示例
const logger = log4js.getLogger();

function loggerMiddleware(req, res, next) {
  // 获取请求方的 IP 地址
  /**
   * 
   * 在 Node.js 中，获取请求方的 IP 地址通常可以通过 req 对象的 ip 属性来实现。
   * 不过，如果你的应用部署在某些代理服务器或负载均衡器之后，直接使用 req.ip 可能会得到代理服务器的 IP 地址。
   * 在这种情况下，可以使用 req.headers['x-forwarded-for'] 头部来获取原始请求的 IP 地址。
   */
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  logger.info('——————————————————————————————————————————————————')
  logger.info('[ TIME ]:', dayjs().format('YYYY-MM-DD HH:mm:ss'));
  logger.info('[ METHOD ]: ', req.method);
  logger.info('[ URL ]: ', req.url);
  logger.info('[ IP ]: ', ip);
  // 打印参数 分为GET和POST两种情况
  if (req.method === 'GET') {
    logger.info('[ QUERY ]: ', req.query);
  } else if (req.method === 'POST') {
    logger.info('[ BODY ]: ', req.body);  
  }

  next(); // 继续处理请求
}

module.exports = loggerMiddleware;