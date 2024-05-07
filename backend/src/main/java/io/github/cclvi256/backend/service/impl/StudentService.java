package io.github.cclvi256.backend.service.impl;

import io.github.cclvi256.backend.entity.Student;
import io.github.cclvi256.backend.mapper.IStudentMapper;
import io.github.cclvi256.backend.service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService implements IStudentService {
  @Autowired
  private IStudentMapper studentMapper;
  
  @Override
  public List<Student> findAll() {
    return studentMapper.findAll();
  }
  
  @Override
  public void delete(String id) {
    studentMapper.delete(id);
  }
  
  @Override
  public void update(Student student) {
    studentMapper.update(student);
  }
  
  @Override
  public void add(Student student) {
    studentMapper.insert(student);
  }
}
