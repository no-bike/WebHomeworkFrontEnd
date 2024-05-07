package io.github.cclvi256.backend.service.impl;
import io.github.cclvi256.backend.entity.Grades;
import io.github.cclvi256.backend.mapper.IGradeMapper;
import io.github.cclvi256.backend.service.IGradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

    @Service
    public class GradeService implements IGradeService {
        @Autowired
        private IGradeMapper gradeMapper;

        @Override
        public List<Grades> findAll() {
            return gradeMapper.findAll();
        }

        @Override
        public void delete(String id) {
            gradeMapper.delete(id);
        }

        @Override
        public void update(Grades grade) {
            gradeMapper.update(grade);
        }

        @Override
        public void add(Grades grade) {
            gradeMapper.insert(grade);
        }
}
