package com.javajobsite.jobsite.repository;

import com.javajobsite.jobsite.model.Post;
import com.mongodb.client.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.convert.MongoConverter;
import org.springframework.stereotype.Component;
import java.util.Arrays;
import org.bson.Document;
import com.mongodb.client.AggregateIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;



import java.util.ArrayList;

import java.util.List;

@Component
public class SearchRepositoryImpl implements searchRepository{
  @Autowired
 MongoClient  client;
  @Autowired
  MongoConverter converter;
  @Override
  public List<Post> findByText(String text) {
    final List<Post> posts = new ArrayList<>();

    MongoDatabase database = client.getDatabase("JobSite");
    MongoCollection<org.bson.Document> collection = database.getCollection("JobPosts");

    AggregateIterable<Document> result = collection.aggregate(List.of(
            new Document("$search",
            new Document("text",
            new Document("query", text).append("path", Arrays.asList("techs", "desc", "profile")))),
            new Document("$sort",
            new Document("exp", 1L)),
            new Document("$limit", 5L)));


  result.forEach(doc -> posts.add(converter.read(Post.class, doc)));

    return posts;
  }
}
