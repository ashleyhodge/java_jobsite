package com.javajobsite.jobsite;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Slf4j
@Controller
@RequiredArgsConstructor
public class AppController {

  @RequestMapping({"/api/posts"})
  public String loadUI() {
    log.info("loading UI");
    return "forward:/index.html";
  }

}
