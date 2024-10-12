package com.manageserverspringboot.config;

import com.manageserverspringboot.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * @description: 拦截器配置
 * @author JJQ
 * @date 2024/10/11
 * @version 1.0
 */

@Component
public class MyGlobalInterceptor implements HandlerInterceptor {

    // 传入request 根据请求非法跳转至对应的错误处理控制器
    public void jumpToErr(HttpServletRequest request, HttpServletResponse response) {
        // GET请求token非法
        if ("GET".equals(request.getMethod())) {
                RequestDispatcher dispatcher = request.getRequestDispatcher("/tokenGetErr");// 转发到此路由
                if (dispatcher != null) {
                    try {
                        dispatcher.forward(request, response);
                    } catch (ServletException e) {
                        e.printStackTrace();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
        } else if ("POST".equals(request.getMethod())) {
            RequestDispatcher dispatcher = request.getRequestDispatcher("/tokenPostErr");// 转发到此路由
            if (dispatcher != null) {
                try {
                    dispatcher.forward(request, response);
                } catch (ServletException e) {
                    e.printStackTrace();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }

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

            System.out.println("校验结果"+isValid);

             // 如果验证失败 则将其转发到token过期专属的路由
            if (!isValid) {
                jumpToErr(request, response);
                return false;
            }

            // 如果token有效或者你不打算在这里验证它，继续处理请求
            return true;
        } else {
            // 没有token,拒绝访问
            jumpToErr(request, response);
            return false;
        }
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
