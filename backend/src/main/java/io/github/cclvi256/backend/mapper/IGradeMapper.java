package io.github.cclvi256.backend.mapper;

import io.github.cclvi256.backend.entity.Grades;

import org.apache.ibatis.annotations.*;

import java.util.List;
@Mapper
public interface IGradeMapper {
    @Select("SELECT * FROM GRADE ORDER BY ID")
    List<Grades> findAll();
    @Delete("DELETE FROM GRADE WHERE ID = #{id}")
    void delete(String id);
    @Update("UPDATE GRADE SET ID = #{id}, STUDENT_ID = #{student_id}, " +
            "EXAM_ID = #{exam_id}, CH_POINT=#{ch_point}, MT_POINT=#{mt_point}, EN_POINT=#{en_point} WHERE ID = #{id}")
    void update(Grades grades);

    @Insert("INSERT INTO GRADE (ID, STUDENT_ID, EXAM_ID, CH_POINT, MT_POINT, EN_POINT) " +
            "VALUES (#{id}, #{student_id}, #{exam_id}, #{ch_point},#{mt_point}.{en_point})")
    void insert(Grades grades);

}
