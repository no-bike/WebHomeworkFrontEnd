package io.github.cclvi256.backend.mapper;

import io.github.cclvi256.backend.entity.Student;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface IStudentMapper {
  @Select("SELECT * FROM students ORDER BY NAME")
  List<Student> findAll();
  
  @Delete("DELETE FROM students WHERE ID = #{id}")
  void delete(String id);
  
  @Update("UPDATE students SET NAME = #{name}, GENDER = #{gender}, " +
      "BIRTHDAY = #{birthday} WHERE ID = #{id}")
  void update(Student student);
  
  @Insert("INSERT INTO students (ID, NAME, GENDER, BIRTHDAY) " +
      "VALUES (#{id}, #{name}, #{gender}, #{birthday})")
  void insert(Student student);
}
