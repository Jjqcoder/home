package com.jiang.interceptors;

import com.jiang.service.IntercepterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class MyGlobalInterceptor implements HandlerInterceptor {
    @Autowired
    IntercepterService intercepterService;
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        // 在这里添加请求前的处理逻辑，比如记录日志、检查权限等
        // 如果返回false，则请求将不会继续传递给控制器
        // 这里简单地返回true，表示请求可以继续
//        System.out.println("我是拦截器");
        System.out.println(getClientIP(request));
        intercepterService.insertIp(getClientIP(request));
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

    // 自定义方法
    // 辅助方法，用于获取客户端IP地址
    private String getClientIP(HttpServletRequest request) {
        String ipAddress = request.getHeader("X-Forwarded-For");

        if (ipAddress == null) {
            ipAddress = request.getHeader("Proxy-Client-IP");
        }

        if (ipAddress == null) {
            ipAddress = request.getHeader("WL-Proxy-Client-IP");
        }

        if (ipAddress == null) {
            ipAddress = request.getRemoteAddr();
            if ("0:0:0:0:0:0:0:1".equals(ipAddress)) {
                // 如果是在本地测试，可能会得到IPv6的本地回环地址，这里可以替换为你想要的IP（比如127.0.0.1）
                ipAddress = "127.0.0.1";
            }
        }

        // 对于通过多个代理的情况，第一个IP为客户端真实IP,若后面有非信任代理，也可以进行校验
        if (ipAddress != null && ipAddress.length() > 15) { // "XXX.XXX.XXX.XXX".length() = 15
            if (ipAddress.indexOf(",") > 0) {
                ipAddress = ipAddress.substring(0, ipAddress.indexOf(","));
            }
        }

        return ipAddress;
    }
}
