package com.manageserverspringboot.service.impl;

import com.manageserverspringboot.service.TokenService;
import io.jsonwebtoken.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class TokenImpl implements TokenService {

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

//    验证传入的token是否合法
    @Override
    public Boolean isTokenValid(String token) {

        Claims body = null;// 取出其载荷部分（即所有的声明信息）

        try {
            body = Jwts.parser()
                    .setSigningKey(SECRET_KEY)
                    .parseClaimsJws(token)
                    .getBody();
        } catch (ExpiredJwtException e) {
            return false;
        } catch (UnsupportedJwtException e) {
            return false;
        } catch (MalformedJwtException e) {
            return false;
        } catch (SignatureException e) {
            return false;
        } catch (IllegalArgumentException e) {
            return false;
        }

        Date expiration = body.getExpiration();
        if (expiration.before(new Date())) {
            return false;// 已经过期
        }

        return true;
    }
}
