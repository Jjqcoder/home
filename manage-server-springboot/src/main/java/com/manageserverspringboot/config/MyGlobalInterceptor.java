package com.manageserverspringboot.config;

import com.manageserverspringboot.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @description: 拦截器配置
 * @author JJQ
 * @date 2024/10/11
 * @version 1.0
 */

@Component
public class MyGlobalInterceptor implements HandlerInterceptor {

    @Autowired
    TokenService tokenService;
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String url = request.getRequestURL().toString();
        if (url.equals("http://localhost:8090/login")) {
            // 如果是登录的接口 则直接放行
            return true;
        } else if (url.equals("http://localhost:8090/insertUserByUsernameAndPassword")) {
            // 如果是注册接口 则直接跳过
            return true;
        } else if (url.indexOf("Err") != -1) {
            // 如果是错误处理的url,放行
            return true;
        }
        // 从请求头中获取Authorization信息
        String authorizationHeader = request.getHeader("Authorization");
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            // 提取token
            String token = authorizationHeader.substring(7); // 7是"Bearer "的长度

            // 在这里你可以对token进行验证，比如调用isTokenValid方法
             boolean isValid = tokenService.isTokenValid(token);

             // 如果验证失败 则将其转发到token过期专属的路由
            if (!isValid) {
                RequestDispatcher dispatcher = request.getRequestDispatcher("/tokenErr");// 转发到此路由
                if (dispatcher != null) {
                    dispatcher.forward(request, response);
                    return false;
                }
            }

            System.out.println("校验结果"+isValid);

            // 如果token无效，你可以返回false来阻止请求进一步处理
             if (!isValid) {
            //     response.setStatus(HttpServletResponse.SC_FORBIDDEN); // 403 Forbidden
                 return false;
             }

            // 如果token有效或者你不打算在这里验证它，继续处理请求
            return true;
        }
        return true;// true:允许访问
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        // 此处添加请求处理后的逻辑，比如修改视图或模型数据
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        // 此处添加请求处理完成后的逻辑，比如清理资源等
    }

}
