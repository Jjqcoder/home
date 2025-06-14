package com.manageserverspringboot.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.manageserverspringboot.entity.User;
import org.apache.ibatis.annotations.Mapper;

/**
* @author Jiangjianqing
* @date 2024/10/8 21:17
* @description 用户持久层
*/

@Mapper
public interface UserMapper extends BaseMapper<User> {
}
