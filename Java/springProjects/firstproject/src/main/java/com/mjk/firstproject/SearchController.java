package com.mjk.firstproject;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SearchController {
	
	@RequestMapping("/search")
	public String searchForSomething(@RequestParam(value="q", required=false) String  searchQuery) {
		System.out.println("****************");
		System.out.println(searchQuery);
		System.out.println("****************");
		if(searchQuery == null) {
			return "What do you seek?";
		}else {
			return "You searched for " + searchQuery;
			
		}
	}
	
	
	@RequestMapping("/users/{user_id}")
	public String displayUserDetails(@PathVariable("user_id") String idOfUser) {
		return "Showing information about user #" +idOfUser + " here";
	}


	
}
