package com.manageserverspringboot.service.impl;

import com.manageserverspringboot.service.TokenService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class getTokenImpl implements TokenService {

    // 密钥
    @Value("${app.tokenKey}")
    private String SECRET_KEY;

    // 生成并返回token(token的相关属性均未默认配置)
    @Override
    public String getToken() {

        // 开始生成token
        // 设置JWT的签发时间、过期时间等信息
        Map<String, Object> claims = new HashMap<>();
        claims.put("subject", "登录成功后返回的token"); // 将用户ID或其他标识作为JWT的主题

        return Jwts.builder()
                .setClaims(claims) // 设置JWT的负载
                .setIssuedAt(new Date()) // 设置签发时间
                .setExpiration(new Date(System.currentTimeMillis() + 1000*60*1)) // 设置过期时间（单位为毫秒1000ms = 1s）
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY) // 使用HS256算法和密钥签名JWT
                .compact(); // 生成JWT的字符串形式
    }
}
