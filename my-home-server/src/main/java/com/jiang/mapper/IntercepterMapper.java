package com.jiang.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface IntercepterMapper {
    @Insert("INSERT INTO VISIT_RECORDER(IP) VALUES (#{ip})")
    void insertIp(@Param("ip")String ip);
}
