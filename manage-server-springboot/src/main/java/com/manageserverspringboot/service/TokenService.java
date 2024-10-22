package com.manageserverspringboot.service;

import com.baomidou.mybatisplus.extension.service.IService;
import org.springframework.beans.factory.annotation.Value;

/**
 * @description: token相关
 * @author JJQ
 * @date 2024/10/11
 * @version 1.0
 */

public interface TokenService {

//     获取token(默认)
    String getToken();

//    验证传入的token是否合法,合法返回true,不合法返回false
    Boolean isTokenValid(String token);

}
