package com.manageserverspringboot.service;

import com.manageserverspringboot.entity.Config;
import com.manageserverspringboot.entity.R;

import java.util.List;

public interface ConfigService {
    // 获取全部的配置信息
    List<Config> getAllConfig();

    // 删除一条配置信息
    boolean delConfigByType(String type);
}

