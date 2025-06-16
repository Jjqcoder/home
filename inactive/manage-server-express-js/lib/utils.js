/**
 * 创建时间: 2025-06-15
 * 作者: jjq
 * 描述: 工具类
 */

class Utils {
    static #zeroWidthRegex = /[\u200B-\u200D\uFEFF\u2060\u00AD\u034F\u115F\u1160\u17B4\u17B5\u180E\u2000-\u200F\u2028-\u202F\u205F-\u206F\u3164\uFFA0]/;

    static hasZeroWidthCheck(data) {
        if (typeof data !== 'string') {
            data = String(data);
        }
        return this.#zeroWidthRegex.test(data);
    }

    static test() {
        const assert = require('assert');

        // 测试用例
        const testCases = [
            { input: '正常字符串', expected: false },
            { input: '零宽\u200B字符', expected: true },
            { input: '\u200C', expected: true },
            { input: 'no\u200Dzero', expected: true },
            { input: 12345, expected: false },
            { input: '', expected: false },
            { input: '\uFEFF', expected: true },
            { input: '多\u2029行', expected: true }
        ];

        console.log('开始零宽字符检测测试...');
        testCases.forEach((test, i) => {
            try {
                assert.strictEqual(
                    this.hasZeroWidthCheck(test.input),
                    test.expected,
                    `用例 ${i+1} 失败: ${JSON.stringify(test.input)}`
                );
                console.log(`✓ 用例 ${i+1} 通过`);
            } catch (e) {
                console.error(e.message);
            }
        });
        console.log('测试完成');
    }
}

// 导出Utils类
module.exports = Utils;

// 直接运行此文件则进行测试
if (require.main === module) {
    Utils.test();
}