export { }; // 让 TypeScript 把该文件当作模块

/**
 * 创建时间: 2025-05-16
 * 作者: jjq
 * 描述: 访客服务层
 */
const prisma = require('../lib/index').prisma
module.exports = class visitService {
    static async getAllVisit(req) {
        try {
            return await prisma.vISIT_RECORDER.findMany()
        } catch (error) {
            throw error
        }
    }

    // 获取指定数量的数据 默认为1000条（前端不会发送limit数量）
    static async getVisitByLimit(req) {
        try {
            console.log('我被调用了');
            
            const limit = 1000 // 默认为1000条

            let res = await prisma.vISIT_RECORDER.findMany({
                take: limit, // 限制返回的记录数
                orderBy: {
                    ID: 'desc' // 按id降序排序
                }
            })

            return res.reverse() // 注：这里返回的数据是倒序的，所以需要反转一下
        } catch (error) {
            throw error
        }
    }

    // 保留最新的x条访客数据，防止数据量过大
    // 此处暂时定5000条
    static async keepLatestVisit() {
        try {
            // 1. 先查询总记录数
            const totalCount = await prisma.vISIT_RECORDER.count();
            
            // 如果总记录数 ≤ 5000，则不删除
            if (totalCount <= 5000) {
                return `无需删除：当前的总访客数为${totalCount},小于等于5000条`;
            }
    
            // 2. 找出最早的 (totalCount - 5000) 条记录的ID（即保留最新的5000条）
            const recordsToDelete = await prisma.vISIT_RECORDER.findMany({
                take: totalCount - 5000,  // 计算需要删除的数量
                orderBy: { ID: "asc" },   // 按ID升序获取最早的记录
                select: { ID: true }      // 只查询ID，减少数据传输
            });
    
            // 3. 执行删除
            const deleteResult = await prisma.vISIT_RECORDER.deleteMany({
                where: { ID: { in: recordsToDelete.map(r => r.ID) } }
            });
    
            return `删除成功，删除了${deleteResult.count}条旧数据，保留了最新的5000条`;
        } catch (error) {
            console.error('删除失败', error);
            throw error;
        }
    }
}
