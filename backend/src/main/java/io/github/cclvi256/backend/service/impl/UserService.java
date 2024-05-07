package io.github.cclvi256.backend.service.impl;

import io.github.cclvi256.backend.entity.User;
import io.github.cclvi256.backend.mapper.IUserMapper;
import io.github.cclvi256.backend.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService implements IUserService {
  @Autowired
  private IUserMapper userMapper;
  
  @Override
  public User findById(String id) {
    return userMapper.findById(id);
  }
  
  
}
