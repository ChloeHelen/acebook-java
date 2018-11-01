package com.makersacademy.acebook.controller;


import com.makersacademy.acebook.model.Post;
import com.makersacademy.acebook.model.User;
import com.makersacademy.acebook.repository.PostRepository;
import com.makersacademy.acebook.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@RestController
public class PostController {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/api/posts")
    public List<Post> getAllPosts(){
        List<Post> posts = new ArrayList<>();
        postRepository.findAll().forEach(posts::add);
        return posts;
    }

    @PostMapping("/api/posts")
    public Post createPost(@Valid @RequestBody Post post) {
        return postRepository.save(post);
    }

//    @PostMapping("/api/users/{userId}/posts")
//    public Post addPost(@PathVariable Long userId, @Valid @RequestBody Post post){
//        post.setUser(userRepository.findById(userId).get());
//        return postRepository.save(post);
//    }
}
