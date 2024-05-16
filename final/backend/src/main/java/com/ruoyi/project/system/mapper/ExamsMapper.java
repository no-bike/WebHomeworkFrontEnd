package com.ruoyi.project.system.mapper;

import java.util.List;
import com.ruoyi.project.system.domain.Exams;

/**
 * 考试表Mapper接口
 * 
 * @author ruoyi
 * @date 2024-05-14
 */
public interface ExamsMapper 
{
    /**
     * 查询考试表
     * 
     * @param id 考试表主键
     * @return 考试表
     */
    public Exams selectExamsById(Long id);

    /**
     * 查询考试表列表
     * 
     * @param exams 考试表
     * @return 考试表集合
     */
    public List<Exams> selectExamsList(Exams exams);

    /**
     * 新增考试表
     * 
     * @param exams 考试表
     * @return 结果
     */
    public int insertExams(Exams exams);

    /**
     * 修改考试表
     * 
     * @param exams 考试表
     * @return 结果
     */
    public int updateExams(Exams exams);

    /**
     * 删除考试表
     * 
     * @param id 考试表主键
     * @return 结果
     */
    public int deleteExamsById(Long id);

    /**
     * 批量删除考试表
     * 
     * @param ids 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteExamsByIds(Long[] ids);
}
