'use strict'

/**
 * 创建时间: 2025-04-19
 * 作者: jjq
 * 描述: MongoDB 操作主类
 */

const { MongoClient } = require('mongodb'); // 引入 MongoDB 客户端

module.exports = class Mongo {
    constructor() {
        this.uri = require('../../config/index.js').uri; // MongoDB 连接字符串
        this.dbName = require('../../config/index.js').dbName; // 数据库名称
        this.client = new MongoClient(this.uri, { useNewUrlParser: true, useUnifiedTopology: true }); // 创建客户端实例
    }

    // 连接到数据库
    async connect() {
        try {
            await this.client.connect(); // 连接 MongoDB 服务器
            console.log('MongoDB connected successfully.');
            return this.client.db(this.dbName); // 返回数据库实例
        } catch (error) {
            console.error('Failed to connect to MongoDB:', error);
            throw error; // 抛出错误
        }
    }

    // 新增数据
    async insertData(collectionName, data) {
        try {
            const db = await this.connect(); // 获取数据库实例
            const collection = db.collection(collectionName); // 获取集合
            const result = await collection.insertOne(data); // 插入单条数据
            console.log('Data inserted successfully:', result.insertedId);
            return result.insertedId; // 返回插入的文档 ID
        } catch (error) {
            console.error('Failed to insert data:', error);
            throw error; // 抛出错误
        } finally {
            await this.client.close(); // 关闭连接
        }
    }
};

// 示例用法
// (async () => {
//     const Mongo = require('./index'); // 确保路径正确
//     const mongo = new Mongo(); // 创建 Mongo 实例
//     const data = { name: 'jjq', age: 23 }; // 要插入的数据
//     const collectionName = 'log'; // 集合名称
//     try {
//         const insertedId = await mongo.insertData(collectionName, data); // 调用插入方法
//         console.log('Inserted ID:', insertedId);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// })();