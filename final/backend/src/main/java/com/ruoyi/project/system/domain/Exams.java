package com.ruoyi.project.system.domain;

import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import com.ruoyi.framework.aspectj.lang.annotation.Excel;
import com.ruoyi.framework.web.domain.BaseEntity;

/**
 * 考试表对象 exams
 * 
 * @author ruoyi
 * @date 2024-05-14
 */
public class Exams extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** id */
    private Long id;

    /** 英语成绩 */
    @Excel(name = "英语成绩")
    private String english;

    /** 语文成绩 */
    @Excel(name = "语文成绩")
    private String language;

    /** 政治成绩 */
    @Excel(name = "政治成绩")
    private String politics;

    /** 老师id */
    @Excel(name = "老师id")
    private Long userId;

    /** 考试日期 */
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Excel(name = "考试日期", width = 30, dateFormat = "yyyy-MM-dd")
    private Date date;

    /** 学生id */
    @Excel(name = "学生id")
    private String studentId;

    public void setId(Long id) 
    {
        this.id = id;
    }

    public Long getId() 
    {
        return id;
    }
    public void setEnglish(String english) 
    {
        this.english = english;
    }

    public String getEnglish() 
    {
        return english;
    }
    public void setLanguage(String language) 
    {
        this.language = language;
    }

    public String getLanguage() 
    {
        return language;
    }
    public void setPolitics(String politics) 
    {
        this.politics = politics;
    }

    public String getPolitics() 
    {
        return politics;
    }
    public void setUserId(Long userId) 
    {
        this.userId = userId;
    }

    public Long getUserId() 
    {
        return userId;
    }
    public void setDate(Date date) 
    {
        this.date = date;
    }

    public Date getDate() 
    {
        return date;
    }
    public void setStudentId(String studentId) 
    {
        this.studentId = studentId;
    }

    public String getStudentId() 
    {
        return studentId;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
            .append("id", getId())
            .append("english", getEnglish())
            .append("language", getLanguage())
            .append("politics", getPolitics())
            .append("userId", getUserId())
            .append("date", getDate())
            .append("studentId", getStudentId())
            .toString();
    }
}
