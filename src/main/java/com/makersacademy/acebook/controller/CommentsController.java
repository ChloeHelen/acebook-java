package com.makersacademy.acebook.controller;

import com.makersacademy.acebook.model.Comment;
import com.makersacademy.acebook.repository.CommentRepository;
import com.makersacademy.acebook.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class CommentsController {

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private PostRepository postRepository;

    @GetMapping("/api/posts/{postId}/comments")
    public List<Comment> getPostComments(@PathVariable Long postId) {
        return commentRepository.findByPostId(postId);
    }

    @PostMapping("/api/posts/{postId}/comments")
    public Comment createComment(@PathVariable Long postId, @Valid @RequestBody Comment comment) {
        comment.setPost(postRepository.findById(postId).get());
        return commentRepository.save(comment);

    }

}
