package com.manageserverspringboot.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.manageserverspringboot.entity.Config;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ConfigMapper extends BaseMapper<Config> {
}
