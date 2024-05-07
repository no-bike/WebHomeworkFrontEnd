package io.github.cclvi256.backend.service;

import io.github.cclvi256.backend.entity.Student;

import java.util.List;

public interface IStudentService {
  List<Student> findAll();
  void delete(String id);
  void update(Student student);
  void add(Student student);
}
