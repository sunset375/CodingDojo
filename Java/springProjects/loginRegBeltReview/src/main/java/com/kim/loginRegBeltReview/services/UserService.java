package com.kim.loginRegBeltReview.services;

import java.util.List;
import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.kim.loginRegBeltReview.models.LoginUser;
import com.kim.loginRegBeltReview.models.Menu;
import com.kim.loginRegBeltReview.models.User;
import com.kim.loginRegBeltReview.repositories.MenuRepository;
import com.kim.loginRegBeltReview.repositories.UserRepository;

@Service
public class UserService {
	@Autowired
    private UserRepository userRepo;
	
	@Autowired
	private MenuRepository menuRepo;
	
	
	
    
    public User register(User newUser, BindingResult result) {
    	//validate that the newUser object's email does not exist in the db already. If it already exists, add another validation 
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
        //search the database for a user who has the same email as the one typed in the login form(newLogin.getEmail())
        Optional<User> potentialUser = userRepo.findByEmail(newLogin.getEmail());
        //if the email is not found, then the variable "potentialUser does not contain a user object and we create a custom validation error for "Unknown email"
        if(!potentialUser.isPresent()) {
            result.rejectValue("email", "Unique", "Unknown email!");
            return null;
        }
        // at this point if the application request gets this far, then that means the email was found, and we need to see if the password matches
        User user = potentialUser.get();
        if(!BCrypt.checkpw(newLogin.getPassword(), user.getPassword())) { //using Bcrypt to check if the password for that account matches the password stored in the db
            result.rejectValue("password", "Matches", "Invalid Password!"); //password didn't match, create an validation error message
        }
        if(result.hasErrors()) {
            return null;
        } else {
        // at this point, email was found and password matches, successful login can occur
            return user;
        }
    }
    
    public User findOneUser(Long id) {
    	return this.userRepo.findById(id).orElse(null);
    }
    
    
    //METHODS FOR THE MENU OPERATIONS
    public List<Menu> findAllMenuItems() {
    	return (List<Menu>)this.menuRepo.findAll();
    }
    
    //create a menu item
    public Menu createMenuItem(Menu m) {
    	return this.menuRepo.save(m);
    }
    
    //find one menu item
    public Menu findOneMenuItem(Long id) {
    	return this.menuRepo.findById(id).orElse(null);
    }
    
    //update one menu item
    public Menu updateOneMenuItem(Menu m) {
    	return this.menuRepo.save(m);
    }
    
    
    //delete one menu item
    public void deleteOneMenuItem(Long id) {
    	this.menuRepo.deleteById(id);
    }
    
    
}
