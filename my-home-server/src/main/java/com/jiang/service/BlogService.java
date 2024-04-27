package com.jiang.service;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.jiang.entity.Blog;

import java.util.List;


public interface BlogService{
    public Blog getBlogById(Integer id);

    List<Blog> getAllBlog();

    Void insertBlog(Blog blog);

    void deleteBlogById(Integer id);

    Page<Blog> selectPage(int current, int size);
}
