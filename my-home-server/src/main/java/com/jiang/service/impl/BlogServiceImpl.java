package com.jiang.service.impl;

import com.jiang.entity.Blog;
import com.jiang.mapper.BlogMapper;
import com.jiang.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class BlogServiceImpl implements BlogService {
    @Autowired
    BlogMapper blogMapper;
    @Override
    public Blog getBlogById(Integer id) {
        return blogMapper.getBlogById(id);
    }
}
