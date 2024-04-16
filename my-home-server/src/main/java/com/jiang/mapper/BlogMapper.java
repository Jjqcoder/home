package com.jiang.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.jiang.entity.Blog;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;


@Mapper
public interface BlogMapper extends BaseMapper<Blog> {
    @Select("select * from blog where id = #{id}")
    Blog getBlogById(@Param("id")Integer id);
}
