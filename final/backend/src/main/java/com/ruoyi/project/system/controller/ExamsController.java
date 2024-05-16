package com.ruoyi.project.system.controller;

import java.util.List;
import javax.servlet.http.HttpServletResponse;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ruoyi.framework.aspectj.lang.annotation.Log;
import com.ruoyi.framework.aspectj.lang.enums.BusinessType;
import com.ruoyi.project.system.domain.Exams;
import com.ruoyi.project.system.service.IExamsService;
import com.ruoyi.framework.web.controller.BaseController;
import com.ruoyi.framework.web.domain.AjaxResult;
import com.ruoyi.common.utils.poi.ExcelUtil;
import com.ruoyi.framework.web.page.TableDataInfo;

/**
 * 考试表Controller
 * 
 * @author ruoyi
 * @date 2024-05-14
 */
@RestController
@RequestMapping("/system/exams")
public class ExamsController extends BaseController
{
    @Autowired
    private IExamsService examsService;

    /**
     * 查询考试表列表
     */
    @GetMapping("/list")
    public TableDataInfo list(Exams exams)
    {
        startPage();
        List<Exams> list = examsService.selectExamsList(exams);
        return getDataTable(list);
    }

    /**
     * 导出考试表列表
     */
    @PreAuthorize("@ss.hasPermi('system:exams:export')")
    @Log(title = "考试表", businessType = BusinessType.EXPORT)
    @PostMapping("/export")
    public void export(HttpServletResponse response, Exams exams)
    {
        List<Exams> list = examsService.selectExamsList(exams);
        ExcelUtil<Exams> util = new ExcelUtil<Exams>(Exams.class);
        util.exportExcel(response, list, "考试表数据");
    }

    /**
     * 获取考试表详细信息
     */
    @PreAuthorize("@ss.hasPermi('system:exams:query')")
    @GetMapping(value = "/{id}")
    public AjaxResult getInfo(@PathVariable("id") Long id)
    {
        return success(examsService.selectExamsById(id));
    }

    /**
     * 新增考试表
     */
    @PreAuthorize("@ss.hasPermi('system:exams:add')")
    @Log(title = "考试表", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody Exams exams)
    {
        return toAjax(examsService.insertExams(exams));
    }

    /**
     * 修改考试表
     */
    @PreAuthorize("@ss.hasPermi('system:exams:edit')")
    @Log(title = "考试表", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody Exams exams)
    {
        return toAjax(examsService.updateExams(exams));
    }

    /**
     * 删除考试表
     */
    @PreAuthorize("@ss.hasPermi('system:exams:remove')")
    @Log(title = "考试表", businessType = BusinessType.DELETE)
	@DeleteMapping("/{ids}")
    public AjaxResult remove(@PathVariable Long[] ids)
    {
        return toAjax(examsService.deleteExamsByIds(ids));
    }
}
