package com.jiang.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.jiang.entity.Blog;
import com.jiang.mapper.BlogMapper;
import com.jiang.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class BlogServiceImpl implements BlogService {
    @Autowired
    BlogMapper blogMapper;
    @Override
    public Blog getBlogById(Integer id) {
        return blogMapper.getBlogById(id);
    }

    @Override
    public List<Blog> getAllBlog() {
        return blogMapper.getAllBlog();
    }

    @Override
    public Void insertBlog(Blog blog) {
        blogMapper.insertBlog(blog);

        return null;
    }

    @Override
    public void deleteBlogById(Integer id) {
        blogMapper.deleteBlogById(id);

        return;
    }

    @Override
    public Page<Blog> selectPage(int current, int size) {
        Page<Blog> page = new Page<>(current, size);
//        System.out.println("current"+current);
//        System.out.println("size"+size);
        QueryWrapper<Blog> queryWrapper = new QueryWrapper<>();

        // 开始添加查询条件，此处我先不加
        return blogMapper.selectPage(page, queryWrapper);
    }
}
