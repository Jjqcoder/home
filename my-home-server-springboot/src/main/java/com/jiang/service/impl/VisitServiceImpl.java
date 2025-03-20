package com.jiang.service.impl;

import com.jiang.entity.Visit;
import com.jiang.mapper.VisitMapper;
import com.jiang.service.VisitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VisitServiceImpl implements VisitService {

    @Autowired
    private VisitMapper visitMapper;

    // 获取全部的访客信息
    @Override
    public List<Visit> getAllVisitData() {
        return visitMapper.selectList(null);
    }
}
