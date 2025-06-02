/**
 * 创建时间: 2025-06-02
 * 作者: jjq
 * 描述: 访客api模块
 */

import { get } from './http.api.js';

export const visitApi = {
    someVisit: async () => {
        return await get(
            `/visit/someVisit`,
            ) 
    }
}
