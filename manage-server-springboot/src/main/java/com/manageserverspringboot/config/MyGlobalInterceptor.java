package com.manageserverspringboot.config;

import cn.dev33.satoken.stp.StpUtil;
import com.manageserverspringboot.service.TokenService;
import lombok.extern.slf4j.Slf4j;
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
@Slf4j(topic = "[拦截器日志-MyGlobalInterceptor]")
public class MyGlobalInterceptor implements HandlerInterceptor {

    // 依赖注入
    @Autowired
    TokenService tokenService;

    // 传入request 根据非法请求的类型（GET 或 POST）跳转至对应的错误处理控制器
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

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String url = request.getRequestURL().toString();
        // 获取
        if (url.indexOf("/login") != -1) {
            // 如果是登录的接口 则直接放行
            return true;
        } else if (url.indexOf("/insertUserByUsernameAndPassword") != -1) {
            // 如果是注册接口 则直接跳过
            return true;
        } else if (url.indexOf("Err") != -1) {
            // 如果是错误处理的url,放行
            return true;
        } else if ("OPTIONS".equals(request.getMethod())) {
            /**
            * @author Jiangjianqing
            * @date 2024/10/12 21:01
            * @description 在前端使用XMLHttpRequest或fetch API 发起跨域请求时，
             * 如果请求方法不是简单的GET、HEAD或POST（且POST请求的Content-Type为text/plain、multipart/form-data
             * 或application/x-www-form-urlencoded），或者请求中包含了自定义头（Custom Headers），
             * 浏览器会首先发送一个OPTIONS请求（也称为“预检请求”或“preflight request”）到目标服务器。
            */
            // 放行预检请求
            return true;
        } else if (url.indexOf("swagger") != -1) {
            // 放行 swagegr 相关的路由
            return true;
        } else if (url.indexOf("test") != -1) {
            // 放行测试路由
            return true;
        } else if (StpUtil.isLogin()) {// StpUtil.isLogin() => 判断当前会话是否已经登录，返回true=已登录，false=未登录
            // 如果是sa-token认证通过了 就放行
            return true;
        }
        log.error("被拦截！{}",request.toString());
        jumpToErr(request, response);
        return false;
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
