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
* @description 文件相关操作
*/
@Service
@Slf4j(topic = "[文件服务]")
public class MyFileService {
    @Autowired
    private ResourceLoader resourceLoader;

    /**
    * @author Jiangjianqing
    * @date 2024/10/29 0:31
    * @description 传入resource文件夹下的文件名, 返回文件内容
    */
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

    // TODO 传入指定的配置文件和键值,插入或更新配置

    public boolean upsertConfig(String filename, String key, String value) {
        // 首先读数据
        // 修改
        // 存入数据
        return false;
    }
}
