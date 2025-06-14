package com.manageserverspringboot.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
* @author Jiangjianqing
* @date 2024/10/29 20:54
* @description 配置类
*/
@Data
@AllArgsConstructor
@NoArgsConstructor
@TableName("config")
public class Config {

    Integer id;
    String type;
    String data;

}
