package io.github.cclvi256.backend.service;

    import io.github.cclvi256.backend.entity.Grades;

import java.util.List;

public interface IGradeService {
    List<Grades> findAll();
    void delete(String id);
    void update(Grades grades);
    void add(Grades grades);
}
