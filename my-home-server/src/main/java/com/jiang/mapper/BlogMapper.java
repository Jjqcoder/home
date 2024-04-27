package com.jiang.mapper;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.jiang.entity.Blog;
import org.apache.ibatis.annotations.*;

import java.util.List;


@Mapper
public interface BlogMapper extends BaseMapper<Blog> {
    @Select("select * from blog where id = #{id}")
    Blog getBlogById(@Param("id")Integer id);

    @Select("select * from blog")
    List<Blog> getAllBlog();

    @Insert("INSERT INTO " +
            "blog (BLOG_CREATE_TIME, BLOG_UPDATE_TIME, BLOG_TITLE, BLOG_CONTENT, IS_DELETE) " +
            "VALUES (#{blogCreateTime}, #{blogUpdateTime}, #{blogTitle}, #{blogContent}, #{isDelete})")
    @Options(useGeneratedKeys = true)// useGeneratedKeys：数据库表的主键是自动生成、keyProperty属性名对应的是你的实体类中的主键属性(注意，此处因为主键是自增的，bean中没有，所以不要加上keyProperty)
    void insertBlog(Blog blog);

    @Delete("DELETE FROM blog WHERE ID = #{id}")
    void deleteBlogById(Integer id);
}
