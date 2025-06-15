/**
 * 创建时间: 2025-06-02
 * 作者: jjq
 * 描述: 版本api模块
 */

import { get } from './internal/http.js';

export const versionApi = {
    myHomeServerExpressJsVersion: async () => {
        return await get(
            `/version/getVersion`,
            )
    },
    dbserviceVersion: async () => {
        return await get(
            `/dbservice/getVersion`,
            ) 
    }

}