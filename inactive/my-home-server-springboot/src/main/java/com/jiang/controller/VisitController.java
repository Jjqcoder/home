package com.jiang.controller;

import com.jiang.entity.Visit;
import com.jiang.service.VisitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
* @author Jiangjianqing
* @date 2025/3/20 14:37
* @description 访客信息控制器
*/

@RestController
public class VisitController {
    @Autowired
    private VisitService visitService;

    // 获取全部的访客数据
    @GetMapping("/visit")
    public List<Visit> getAllVisit() {
        return visitService.getAllVisitData();
    }
}
