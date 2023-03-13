package com.javajobsite.jobsite;

import com.javajobsite.jobsite.model.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostRepository extends MongoRepository<Post, String> {

}
