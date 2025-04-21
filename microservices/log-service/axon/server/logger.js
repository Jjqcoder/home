'use strict'

const log4js = require("log4js");

log4js.configure({
    appenders: {
        console: { type: "console" },
        file: {
            type: "dateFile",
            filename: "./logs/log.txt",
            pattern: "yyyy-MM-dd.log",
            alwaysIncludePattern: true,
            numBackups: 7 // 保留7个日志文件（对应7天）
        }
    },
    categories: {
        default: { appenders: ["console", "file"], level: "info" }
    }
});

const logger = log4js.getLogger();

module.exports = logger;