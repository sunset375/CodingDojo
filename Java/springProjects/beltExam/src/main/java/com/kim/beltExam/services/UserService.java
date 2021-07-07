package com.kim.beltExam.services;

import java.util.List;
import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.kim.beltExam.models.Idea;
import com.kim.beltExam.models.LoginUser;
import com.kim.beltExam.models.User;
import com.kim.beltExam.repositories.IdeaRepository;
import com.kim.beltExam.repositories.UserRepository;


@Service
public class UserService {
	@Autowired
    private UserRepository userRepo;
	
	@Autowired
	private IdeaRepository ideaRepo;
    
    public User register(User newUser, BindingResult result) {
        if(userRepo.findByEmail(newUser.getEmail()).isPresent()) {
            result.rejectValue("email", "Unique", "This email is already in use!");
        }
        if(!newUser.getPassword().equals(newUser.getConfirm())) {
            result.rejectValue("confirm", "Matches", "The Confirm Password must match Password!");
        }
        if(result.hasErrors()) {
            return null;
        } else {
            String hashed = BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt());
            newUser.setPassword(hashed);
            return userRepo.save(newUser);
        }
    }
    
    public User login(LoginUser newLogin, BindingResult result) {
        if(result.hasErrors()) {
            return null;
        }
        Optional<User> potentialUser = userRepo.findByEmail(newLogin.getEmail());
        if(!potentialUser.isPresent()) {
            result.rejectValue("email", "Unique", "Unknown email!");
            return null;
        }
        User user = potentialUser.get();
        if(!BCrypt.checkpw(newLogin.getPassword(), user.getPassword())) {
            result.rejectValue("password", "Matches", "Invalid Password!");
        }
        if(result.hasErrors()) {
            return null;
        } else {
            return user;
        }
    }
    
    
    //find one user
    public User findOneUser(Long id) {
    	return this.userRepo.findById(id).orElse(null);
    }
    
    
    public Idea createIdea(Idea idea) {
    	return this.ideaRepo.save(idea);
    }
    
    
    
    //find all ideas
    public List<Idea> findAllIdea() {
    	return (List<Idea>) this.ideaRepo.findAll();
    }
    
    
    //find one idea by id
    public Idea findOneIdeaById(Long id) {
    	return this.ideaRepo.findById(id).orElse(null);
    }
    
    public Idea updateIdea(Idea idea) {
    	return this.ideaRepo.save(idea);
    }
    
    public void deleteIdea(Long id) {
    	this.ideaRepo.deleteById(id);
    }
    
    
//    //like increment
//    public void likeIncrease(Long id) {
//    	this.ideaRepo.findById(id);
//    	
//    }
    
    
}
