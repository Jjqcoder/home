package com.jiang.service.impl;

import com.jiang.mapper.IntercepterMapper;
import com.jiang.service.IntercepterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class IntercepterServiceImpl implements IntercepterService {

    @Autowired
    IntercepterMapper intercepterMapper;
    @Override
    public void insertIp(String ip) {
        intercepterMapper.insertIp(ip);
    }
}
