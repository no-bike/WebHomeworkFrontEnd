package io.github.cclvi256.backend.controller;

import io.github.cclvi256.backend.entity.User;
import io.github.cclvi256.backend.service.IUserService;
import io.github.cclvi256.backend.util.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Objects;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {
  @Autowired
  private IUserService userService;
  
  @PostMapping("/login")
  public Result Login(User user) {
    User target = userService.findById(user.getId());
    
    if (target == null) {
      return Result.Fail("User not found");
    }
    
    if (Objects.equals(user.getPassword(), target.getPassword())) {
      return Result.OK("Login success");
    } else {
      return Result.Fail("Password error");
    }
  }
}
