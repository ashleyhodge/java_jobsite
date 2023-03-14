package com.javajobsite.jobsite.controller;

import com.javajobsite.jobsite.repository.PostRepository;
import com.javajobsite.jobsite.model.Post;
import com.javajobsite.jobsite.repository.searchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class PostController {
  @Autowired
  PostRepository repo;
  @Autowired
  searchRepository srepo;
  @ApiIgnore

  public void redirect(HttpServletResponse response) throws IOException {
    response.sendRedirect("/swagger-ui.html");
  }
  @CrossOrigin
  @GetMapping("/allPosts")
  public List<Post> getAllPosts() {
    return repo.findAll();
  }
  @CrossOrigin
  @GetMapping("posts/{text}")
  public List<Post> search(@PathVariable String text){
    return srepo.findByText(text);
  }

  @CrossOrigin
  @PostMapping("/post")
  public Post addPost(@RequestBody Post post){
    return repo.save(post);
  }
}
