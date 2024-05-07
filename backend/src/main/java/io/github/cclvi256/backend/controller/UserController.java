package io.github.cclvi256.backend.controller;

import io.github.cclvi256.backend.entity.User;
import io.github.cclvi256.backend.util.Result;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {
  @PostMapping("/login")
  public Result Login(User user) {
    if(user.getUsername().equals("username") && user.getPassword().equals("password")) {
      return Result.OK("Login success");
    } else {
      return Result.Fail("Username or password is incorrect");
    }
  }
}
