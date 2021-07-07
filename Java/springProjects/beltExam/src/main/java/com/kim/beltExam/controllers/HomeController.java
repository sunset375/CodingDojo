package com.kim.beltExam.controllers;

import java.awt.Menu;
import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.kim.beltExam.models.Idea;
import com.kim.beltExam.models.LoginUser;
import com.kim.beltExam.models.User;
import com.kim.beltExam.services.UserService;



@Controller
public class HomeController {
	
	
	@Autowired
    private UserService userServ;
    
    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("newUser", new User());
        model.addAttribute("newLogin", new LoginUser());
        return "index.jsp";
    }
    
    @PostMapping("/register")
    public String register(@Valid @ModelAttribute("newUser") User newUser, 
            BindingResult result, Model model, HttpSession session) {
        userServ.register(newUser, result);
        if(result.hasErrors()) {
            model.addAttribute("newLogin", new LoginUser());
            return "index.jsp";
        }
        session.setAttribute("user_id", newUser.getId());
        return "redirect:/ideas";
    }
    
    @PostMapping("/login")
    public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin, 
            BindingResult result, Model model, HttpSession session) {
        User user = userServ.login(newLogin, result);
        if(result.hasErrors()) {
            model.addAttribute("newUser", new User());
            return "index.jsp";
        }
        session.setAttribute("user_id", user.getId());
        return "redirect:/ideas";
    
    }
    
   
    
    
    @GetMapping("/ideas")
    public String home(HttpSession session, Model model) {
    	if(session.getAttribute("user_id") == null) {
    		return "redirect:/";
    	}
    	//use session to retrieve the id of the logged in user or newly registered user
    	Long loggedInId = (Long)session.getAttribute("user_id");
    	//use the retrieved id to find a user from the database who has that id, so we can send that user's information to the template
    	User loggedInUserObj = this.userServ.findOneUser(loggedInId);
    	model.addAttribute("loggedInUser", loggedInUserObj);
    	
    	
    	//passing all the menu items to the template. first we need to get the menu items by using the service
    	List<Idea> allIdeas = this.userServ.findAllIdea();
    	model.addAttribute("allIdeas", allIdeas);
    	return "dashboard.jsp";
    }
    
    
    @GetMapping("/logout")
    public String logout(HttpSession session) {
    	session.removeAttribute("user_id");
    	return "redirect:/";
    }
    
    
    
    @GetMapping("/ideas/new")
    public String newIdea(@ModelAttribute("idea") Idea idea) {
    	return "newIdea.jsp";
    }
    
    
    @PostMapping("/ideas/create")
    public String createIdea(@Valid @ModelAttribute("idea") Idea idea, BindingResult result, HttpSession session) {
    	if(result.hasErrors()) {
    		return "newIdea.jsp";
    		
    	}else {
    		Long idofLoggedinUser = (Long)session.getAttribute("user_id");
    		User loggedInUserObj = this.userServ.findOneUser(idofLoggedinUser);
    		
    		idea.setCreator(loggedInUserObj);
    		this.userServ.createIdea(idea);
    		return "redirect:/ideas";
    	}
    }
    
    
    
    @GetMapping("/ideas/{id}")
    public String showIdea(@PathVariable("id") Long id, Model model) {
    	
    	Idea idea = this.userServ.findOneIdeaById(id);
    	
    	model.addAttribute("idea", idea);
    	
    	return "oneidea.jsp";
    }
    
    
    @GetMapping("/ideas/{id}/edit")
    public String editIdea(@PathVariable("id") Long id, Model model) {
    	Idea idea = this.userServ.findOneIdeaById(id);
    	model.addAttribute("idea", idea);
    	
    	return "edit.jsp";
    }

    
    @PostMapping("/ideas/{id}/update")
    public String updateIdea(@PathVariable("id") Long id, @Valid @ModelAttribute("idea") Idea idea, BindingResult result, HttpSession session) {
    	if (result.hasErrors()) {
    		return "edit.jsp";
    	}else {
    		Long idofLoggedinUser = (Long)session.getAttribute("user_id");
    		User loggedInUserObj = this.userServ.findOneUser(idofLoggedinUser);
    		
    		Idea ideaToFix = this.userServ.findOneIdeaById(id);
    		
    		ideaToFix.setCreator(loggedInUserObj);
    		ideaToFix.setIdeaName(idea.getIdeaName());
    		this.userServ.updateIdea(ideaToFix);
    		
    		return "redirect:/ideas";
    	}
    	
    }
    
    @GetMapping("/ideas/{id}/delete")
    public String deleteIdea(@PathVariable("id") Long id) {
    	this.userServ.deleteIdea(id);
    	return "redirect:/ideas";
    }
    
    
    
    
//    @GetMapping("/ideas/{id}/like")
//    public String likeIdea(@PathVariable("id") Long id, HttpSession session) {
//    	Long idofLoggedinUser = (Long)session.getAttribute("user_id");
//		User loggedInUserObj = this.userServ.findOneUser(idofLoggedinUser);
//		
//	
// 
//    	Idea idea = this.userServ.findOneIdeaById(id);
//    	
//    	
//    	
////    	idea.setLikecount(idea.getLikecount()+1);
//    	this.userServ.updateIdea(idea);
//    	
//    	return "redirect:/ideas";
//    }
//    

}
