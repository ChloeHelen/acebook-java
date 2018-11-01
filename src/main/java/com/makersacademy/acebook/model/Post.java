package com.makersacademy.acebook.model;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.Table;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Data
@Entity
@Table(name = "POSTS")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String content;
    @Column(name = "created_at")
    @CreationTimestamp
    private Date createdAt;

    protected Post() {
    }

    public Post(String content) {
        this.content = content;
    }

//    @ManyToOne(fetch = FetchType.LAZY, optional = false)
//    // TODO: nullable = false when user login works
//    @JoinColumn(name = "user_id")
//    @OnDelete(action = OnDeleteAction.CASCADE)
//    @JsonIgnore
//    private User user;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

//    public User getUser() {
//        return user;
//    }
//
//    public void setUser(User user) {
//        this.user = user;
//    }
}
