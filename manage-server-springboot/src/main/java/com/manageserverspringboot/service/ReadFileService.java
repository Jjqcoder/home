package com.manageserverspringboot.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

/**
* @author Jiangjianqing
* @date 2024/10/28 21:17
* @description 传入resource文件夹下的文件名,返回指定文件名的值
*/
@Service
@Slf4j(topic = "[读文件服务]")
public class ReadFileService {
    @Autowired
    private ResourceLoader resourceLoader;

    public String readFile(String filename) {
//        return "文件内容";
        // 获取resource文件夹下的方法
        Resource resource = resourceLoader.getResource("classpath:" + filename);
        StringBuilder content = null;
//        开始获取数据
        try (InputStream inputStream = resource.getInputStream();
             BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream))) {

            content = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                content.append(line).append("\n");
            }
        } catch (IOException e) {
            e.printStackTrace();
            log.error("[错误]请检查文件名是否存在,文件名:{}", filename);
            return "[错误]请检查文件名是否存在";
        }

        // 定义json
//        JSONArray jsonArray = JSONUtil.parseArray(content);
        return content.toString();
    }
}
