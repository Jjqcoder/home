package com.manageserverspringboot.service;

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

}
