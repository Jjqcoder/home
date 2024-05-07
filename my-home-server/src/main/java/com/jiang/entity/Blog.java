package com.jiang.entity;

import com.baomidou.mybatisplus.annotation.*;
import lombok.Data;
import java.util.Date;

/**
* @author Jiangjianqing
* @date 2024/4/15 23:32
*/
@Data// 无需手动编写getter、setter、equals、hashCode和toString方法
@TableName("blog")
public class Blog {
    @TableId(type = IdType.AUTO) // 默认主键字段，主键策略为自增
    private Integer id;
    @TableField("BLOG_CREATE_TIME") // 指定字段名与数据库字段
    private Date blogCreateTime;
    @TableField("BLOG_UPDATE_TIME")
    private Date blogUpdateTime;
    @TableField("BLOG_TITLE")
    private String blogTitle;
    @TableField("BLOG_CONTENT")
    private String blogContent;
    @TableField("IS_DELETE")
    private String isDelete;

}
