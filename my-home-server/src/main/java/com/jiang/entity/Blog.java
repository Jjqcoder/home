package com.jiang.entity;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;
import java.util.Date;
import com.baomidou.mybatisplus.annotation.TableName;
/**
* @author Jiangjianqing
* @date 2024/4/15 23:32
*/
@Data// 无需手动编写getter、setter、equals、hashCode和toString方法
@TableName("blog")
public class Blog {

    @TableId // 默认主键字段，主键策略为自增
    private Integer id;
    @TableField("user_name") // 指定字段名与数据库字段
    private Date blogCreateTime;
    @TableField("blogUpdateTime")
    private Date blogUpdateTime;
    @TableField("blogTitle")
    private String blogTitle;
    @TableField("blogContent")
    private String blogContent;
    @TableField("isDelete")
    private String isDelete;

}
