package io.github.cclvi256.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Student {
  private String id;
  private String name;
  private char gender;
  private Date birthday;
  private int age;
}
