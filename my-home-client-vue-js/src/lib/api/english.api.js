/**
 * 创建时间: 2025-06-02
 * 作者: jjq
 * 描述: 英语api模块
 */
import { get } from './http.api.js';
export const englishApi = {
    getSentenceRandomOne: async () => {
        return await get(
            `/english/getSentenceRandomOne`,
            )
    },
}