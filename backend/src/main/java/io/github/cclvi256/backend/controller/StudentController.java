package io.github.cclvi256.backend.controller;

import io.github.cclvi256.backend.entity.Student;
import io.github.cclvi256.backend.service.IStudentService;
import io.github.cclvi256.backend.util.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/student")
public class StudentController {
  @Autowired
  private IStudentService studentService;

  @GetMapping("/list")
  public List<Student> findAll() {
    return studentService.findAll();
  }
  
  @DeleteMapping("/delete/{id}")
  public Result delete(@PathVariable String id) {
    studentService.delete(id);
    return Result.OK("Delete success");
  }
  
  @PutMapping("/modify")
  public Result update(@RequestBody Student student) {
    studentService.update(student);
    return Result.OK("Update success");
  }
  
  @PostMapping("/add")
  public Result add(@RequestBody Student student) {
    studentService.add(student);
    return Result.OK("Add success");
  }
}
