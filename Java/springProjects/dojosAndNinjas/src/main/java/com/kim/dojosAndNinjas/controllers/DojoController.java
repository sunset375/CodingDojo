package com.kim.dojosAndNinjas.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.kim.dojosAndNinjas.models.Dojo;
import com.kim.dojosAndNinjas.models.Ninja;
import com.kim.dojosAndNinjas.services.AppService;

@Controller
public class DojoController {
	
	private final AppService appService;
	
	public DojoController(AppService appService) {
		this.appService = appService;
	}
	
	
	@GetMapping("/")
	public String index(Model model) {
		List<Dojo> allDojos = this.appService.findAllDojos();
		model.addAttribute("allDojos", allDojos);
		return "index.jsp";
	}
	
	
	
	@GetMapping("/dojos/new")
	public String addDojo(@ModelAttribute("dojo") Dojo dojo) {
		return "adddojo.jsp";
	}
	
	
	@PostMapping("/dojos/new")
	public String processAddDojo(@Valid @ModelAttribute("dojo") Dojo dojo, BindingResult result) {
		if (result.hasErrors()) {
			return "adddojo.jsp";	
		}
		else {
			appService.addDojo(dojo);
			return "redirect:/ninjas/new";
		}
	}
	
	
	@GetMapping("/ninjas/new")
	public String addNinja(@ModelAttribute("ninja") Ninja ninja, Model model) {
		List<Dojo> allDojos = appService.findAllDojos();
		model.addAttribute("allDojos", allDojos);
		return "addninja.jsp";
	}
	
	@PostMapping("/ninjas/new")
	public String processAddNinja(@Valid @ModelAttribute("ninja") Ninja ninja, BindingResult result, Model model) {
		if (result.hasErrors()) {
			List<Dojo> allDojos = appService.findAllDojos();
			model.addAttribute("allDojos", allDojos);
			return "addninja.jsp";
		}else {
			this.appService.addNinja(ninja);

			return "redirect:/dojos/" + ninja.getDojo().getId();
		}
	}
	
	@GetMapping("/dojos/{id}")
	public String showDojo(@PathVariable("id") Long id, Model model) {
		Dojo dojoObj = this.appService.getDojoId(id);
		model.addAttribute("dojoObj", dojoObj);
		return "dojo.jsp";
	}
	
	
	
	
}
