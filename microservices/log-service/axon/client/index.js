'use strict'

// client.js
const axon = require('axon');
const sock = axon.socket('req');
const config = require('./config/index.js')

// 配置服务端地址和端口
// const host = '127.0.0.1';
// const port = 3000;

// 连接到服务端
sock.connect(config.port, config.host, () => {
    console.log(`Connected to axon server at ${config.host}:${config.port}`);
});

// 发送请求
function sendRequest(route, body) {
    return new Promise((resolve) => {
        // 设置超时检测
        let timedCheckRes = setTimeout(() => {
            console.error('Request timed out');
            clearTimeout(timedCheckRes);
            timedCheckRes = null;
            resolve({ code: 2001, data: 'Request timed out' });
        }, 15000);

        // 发送请求
        sock.send({ route, body }, (err, res) => {
            clearTimeout(timedCheckRes);
            timedCheckRes = null;
            if (err) {
                resolve(err);// 错误信息
            } else {
                // console.log('Received response:', res);
                resolve(res);
            }
        });
    });
}

// 测试发送请求
(async () => {
    try {
        const response1 = await sendRequest('/add', { name: 'JJQ' });
        console.log('Response', response1);

    } catch (error) {
        console.error('Error:', error);
    }
})();