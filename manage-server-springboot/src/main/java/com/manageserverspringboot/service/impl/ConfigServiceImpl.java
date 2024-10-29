package com.manageserverspringboot.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.manageserverspringboot.entity.Config;
import com.manageserverspringboot.entity.R;
import com.manageserverspringboot.entity.User;
import com.manageserverspringboot.mapper.ConfigMapper;
import com.manageserverspringboot.mapper.UserMapper;
import com.manageserverspringboot.service.ConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConfigServiceImpl implements ConfigService {
    @Autowired
    private ConfigMapper configMapper;


    // 获取全部的配置信息
    @Override
    public List<Config> getAllConfig() {
        return configMapper.selectList(null);
    }

    // 根据type删除一条配置信息
    @Override
    public boolean delConfigByType(String type) {
        QueryWrapper<Config> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("type", type);
        int delete = configMapper.delete(queryWrapper);
        if (delete == 1) {
            return true;
        }
        return false;
    }


}
