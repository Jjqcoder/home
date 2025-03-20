package com.jiang.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.jiang.entity.Visit;
import org.apache.ibatis.annotations.Mapper;

/**
* @author Jiangjianqing
* @date 2025/3/20 14:40
* @description 访客持久层
*/

@Mapper
public interface VisitMapper extends BaseMapper<Visit> {
}
