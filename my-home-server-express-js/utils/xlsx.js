/**
 * 创建时间: 2025-04-26
 * 作者: jjq
 * 描述: xlsx工具类
 */

const XLSX = require('xlsx') // 引入 xlsx 库
const path = require('path') // 引入 path 模块
module.exports = class XlsxUtils {
    /**
     * @param {string} city 城市名称
     * @returns {string} 城市代码
     */
    static async getCityCode(city) {
        // 读取 Excel 文件
        // 构建文件路径
        const filePath = path.join(__dirname, '../resource/weather/AMap_adcode_citycode.xlsx')
        const workbook = XLSX.readFile(filePath) // 文件名
        const sheetName = workbook.SheetNames[0] // 获取第一个工作表的名称
        const worksheet = workbook.Sheets[sheetName] // 获取工作表对象

        // 将工作表转换为 JSON 格式
        const data = XLSX.utils.sheet_to_json(worksheet)
        // 查找第一列数据为 'xxx' 的行，并获取第二列的数据
        for (let row of data) {
            if (row['中文名'] === city) {
                return row.adcode
            }
        }
    }
}
