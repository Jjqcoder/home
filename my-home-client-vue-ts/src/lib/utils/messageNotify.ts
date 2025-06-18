/**
 * 创建时间: 2025-06-02
 * 作者: jjq
 * 描述: 用于弹窗提示
 */

export const messageNotify = (...args) => {
    // 遍历处理每一个参数
    for (let i = 0; i < args.length; i++) {
        try {
            const res = args[i]; 
            // console.log('res:', res);// {code: 200, msg: '分页获取博客信息成功', data: {…}}
            if (res.code  ===200) {
                ElMessage({
                    message: `${res.msg}`,
                    type:'success' // success, warning, info, error
                })
            } else {
                ElMessage({
                    message: `${JSON.stringify(res)}`,
                    type:'error' // success, warning, info, error
                })
            }
        } catch (error) {
            ElMessage({
                message: `${String(error)}`,
                type:'error' // success, warning, info, error
            })
        }
    }
}