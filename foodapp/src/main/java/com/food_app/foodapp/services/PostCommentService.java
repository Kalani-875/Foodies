package com.food_app.foodapp.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food_app.foodapp.model.PostComment;
import com.food_app.foodapp.repositaries.PostRepositary;

import java.util.List;
import java.util.Optional;

@Service
public class PostCommentService {
    @Autowired
    private PostRepositary commentRepository;

    public List<PostComment> findAll() {
        return commentRepository.findAll();
    }

    public PostComment save(PostComment PostComment) {
        return commentRepository.save(PostComment);
    }

    public PostComment findById(String id) {
        return commentRepository.findById(id).orElse(null);
    }

    public void deleteById(String id) {
        commentRepository.deleteById(id);
    }
    public PostComment update(String id, PostComment postComment) {
        Optional<PostComment> optionalComment = commentRepository.findById(id);

        if (optionalComment.isPresent()) {
            PostComment existingComment = optionalComment.get();
            existingComment.setComment(postComment.getComment());
            existingComment.setCommentedTo(postComment.getCommentedTo());
            existingComment.setCommentedBy(postComment.getCommentedBy());

            return commentRepository.save(existingComment);
        } else {
            return null;
        }
    }
}
