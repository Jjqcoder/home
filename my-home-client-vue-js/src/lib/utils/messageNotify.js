/**
 * 创建时间: 2025-06-02
 * 作者: jjq
 * 描述: 用于弹窗提示
 */

export const messageNotify = (...args) => {
    // if (args.length > 1) {
    //     // 如果res存在多个且各个请求都成功 直接提示数据加载完成即可 否则弹窗较多影响用户体验
    //     args.every(res => res.data.code === 200) ? 
    //     ElMessage({
    //         message: `数据加载成功`,
    //         type:'success' // success, warning, info, error 
    //     }):
    //     ElMessage({
    //         message: `${res.data.msg}`,
    //         type:'error' // success, warning, info, error  
    //     })
    // } else {
        // 遍历处理每一个参数
        for (let i = 0; i < args.length; i++) {
            try {
                const res = args[i].data; 
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
        // }
    }

    
}