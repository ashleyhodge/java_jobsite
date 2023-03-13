package com.javajobsite.jobsite.repository;

import com.javajobsite.jobsite.model.Post;

import java.util.List;

public interface searchRepository {

  List<Post> findByText(String text);
}
