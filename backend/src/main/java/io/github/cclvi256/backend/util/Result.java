package io.github.cclvi256.backend.util;

public class Result {
  private int code;
  private String msg;
  private Result(int code, String msg) {
    this.code = code;
    this.msg = msg;
  }
  
  public static Result OK(String msg) {
    return new Result(200, msg);
  }
  
  public static Result Fail(String msg) {
    return new Result(400, msg);
  }
  
  public int getCode() {
    return code;
  }
  
  public String getMsg() {
    return msg;
  }
}
