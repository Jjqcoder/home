package com.jiang.controller;

import com.jiang.entity.Blog;
import com.jiang.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BlogController {
    @Autowired
    private BlogService blogService;

    // 根据id获取一条博客
    @GetMapping("/blog/{id}")
    public Blog getBlogById(@PathVariable Integer id) {
        return blogService.getBlogById(id);
    }

    // 获取全部的博客信息
    @GetMapping("/blog")
    public List<Blog> getAllBlog() {
        return blogService.getAllBlog();
    }
    // 插入一条博客信息
    @PostMapping("/blog")
    public Void insertBlog(@RequestBody Blog blog) {
//        System.out.println(insertBlogDto);
        blogService.insertBlog(blog);
        return null;
    }

    @DeleteMapping("/blog/{id}")
    public Void deleteBlogById(@PathVariable Integer id){
        blogService.deleteBlogById(id);
        return null;
    }
}
