package com.jiang.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.util.Date;

/**
* @author Jiangjianqing
* @date 2025/3/20 14:42
* @description 访客实体类
*/

@Data
@TableName("VISIT_RECORDER")
public class Visit {
    @TableId(type = IdType.AUTO) // 默认主键字段，主键策略为自增
    private Integer id;
    @TableField("IP")
    private String ip;
    @TableField("CREATE_TIME")
    private Date createTime;
}
