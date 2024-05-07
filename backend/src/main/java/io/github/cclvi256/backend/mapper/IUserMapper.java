package io.github.cclvi256.backend.mapper;

import io.github.cclvi256.backend.entity.User;
import org.apache.ibatis.annotations.*;

@Mapper
public interface IUserMapper {
  @Select("SELECT * FROM user WHERE id = #{id}")
  User findById(String id);
}
