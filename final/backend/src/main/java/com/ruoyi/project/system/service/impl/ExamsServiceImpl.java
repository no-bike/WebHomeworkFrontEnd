package com.ruoyi.project.system.service.impl;

import java.util.List;

import com.ruoyi.framework.aspectj.lang.annotation.DataScope;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ruoyi.project.system.mapper.ExamsMapper;
import com.ruoyi.project.system.domain.Exams;
import com.ruoyi.project.system.service.IExamsService;

/**
 * 考试表Service业务层处理
 * 
 * @author ruoyi
 * @date 2024-05-14
 */
@Service
public class ExamsServiceImpl implements IExamsService 
{
    @Autowired
    private ExamsMapper examsMapper;

    /**
     * 查询考试表
     * 
     * @param id 考试表主键
     * @return 考试表
     */
    @Override
    public Exams selectExamsById(Long id)
    {
        return examsMapper.selectExamsById(id);
    }

    /**
     * 查询考试表列表
     * 
     * @param exams 考试表
     * @return 考试表
     */
    @DataScope(userAlias = "ex")
    public List<Exams> selectExamsList(Exams exams)
    {
        return examsMapper.selectExamsList(exams);
    }

    /**
     * 新增考试表
     * 
     * @param exams 考试表
     * @return 结果
     */
    @Override
    public int insertExams(Exams exams)
    {
        return examsMapper.insertExams(exams);
    }

    /**
     * 修改考试表
     * 
     * @param exams 考试表
     * @return 结果
     */
    @Override
    public int updateExams(Exams exams)
    {
        return examsMapper.updateExams(exams);
    }

    /**
     * 批量删除考试表
     * 
     * @param ids 需要删除的考试表主键
     * @return 结果
     */
    @Override
    public int deleteExamsByIds(Long[] ids)
    {
        return examsMapper.deleteExamsByIds(ids);
    }

    /**
     * 删除考试表信息
     * 
     * @param id 考试表主键
     * @return 结果
     */
    @Override
    public int deleteExamsById(Long id)
    {
        return examsMapper.deleteExamsById(id);
    }
}
