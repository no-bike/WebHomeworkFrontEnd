package io.github.cclvi256.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class GradesProcessed {
    private String id;
    private String studentId;
    private String examId;
    private int chPoint;
    private int mtPoint;
    private int enPoint;
    private int sumPoint;
    private int rank;

    GradesProcessed(Grades that) {
        this.id = that.getId();
        this.studentId = that.getStudentId();
        this.examId = that.getExamId();
        this.chPoint = that.getChPoint();
        this.mtPoint = that.getMtPoint();
        this.enPoint = that.getEnPoint();
        this.sumPoint = this.chPoint + this.mtPoint + this.enPoint;
        this.rank = 0;
    }
}
