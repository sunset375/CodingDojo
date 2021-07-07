package com.mjk.hellohuman;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class helloHumanController {

	@RequestMapping("/")
	public String helloUser(@RequestParam(value="name", required=false, defaultValue="Human") String  firstName) {
		System.out.println("****************");
		System.out.println(firstName);
		System.out.println("****************");
		if(firstName == null) {
			return "Hello "+ firstName + "\n Welcome to SpringBoot!";
		}else {
			return "Hello " + firstName + "\n Welcome to SpringBoot!";
			
		}
	}
	

	
}
