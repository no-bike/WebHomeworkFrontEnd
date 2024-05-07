package io.github.cclvi256.backend.service;

import io.github.cclvi256.backend.entity.User;

public interface IUserService {
  User findById(String id);
}
