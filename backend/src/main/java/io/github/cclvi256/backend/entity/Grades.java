package io.github.cclvi256.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Grades {
  private String id;
  private String studentId;
  private String examId;
  private int chPoint;
  private int mtPoint;
  private int enPoint;
}
