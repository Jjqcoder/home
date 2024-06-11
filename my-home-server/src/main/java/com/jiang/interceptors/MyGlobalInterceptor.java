package com.jiang.interceptors;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class MyGlobalInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        // 在这里添加请求前的处理逻辑，比如记录日志、检查权限等
        // 如果返回false，则请求将不会继续传递给控制器
        // 这里简单地返回true，表示请求可以继续
//        System.out.println("我是拦截器");
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        // 在这里添加请求处理后的逻辑，比如修改视图或模型数据
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        // 在这里添加请求处理完成后的逻辑，比如清理资源等
    }
}
