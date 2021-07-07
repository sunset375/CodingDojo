package com.mjk.language.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.mjk.language.models.Language;
import com.mjk.language.services.LanguageService;


@Controller
public class LanguageController {
	private final LanguageService languageService;
	
	
	public LanguageController(LanguageService languageService) {
		this.languageService = languageService;
	}

	@RequestMapping("/languages")
	public String index(@ModelAttribute("language") Language language, Model model) {
		List<Language> allLanguages = this.languageService.allLanguage();
		model.addAttribute("language", new Language());
		model.addAttribute("allLanguages", allLanguages);
		
		return "languages.jsp";
	}
	
	
	@PostMapping("/languages")
	public String create(@Valid @ModelAttribute("language") Language language, BindingResult result, Model model) {
		if (result.hasErrors()) {
			List<Language> allLanguages = this.languageService.allLanguage();
			
			model.addAttribute("allLanguages", allLanguages);
			return "languages.jsp";
			
		} else {
			this.languageService.createLanguage(language);
			return "redirect:/languages";
		}
	}
	
	
	
	@GetMapping("/languages/{id}")
	public String getOneLanguage(Model model, @PathVariable("id") Long id) {
		Language language = this.languageService.getOneLanguage(id);
		
		model.addAttribute("language", language);
		return "languageinfo.jsp";
	}
	
	
	@GetMapping("/languages/{id}/edit")
	public String edit(@PathVariable("id") Long id, Model model) {
		Language language = this.languageService.getOneLanguage(id);
		model.addAttribute(language);
		return "edit.jsp";
	}
	
	
	@PostMapping("/languages/{id}/update")
	public String update(@Valid @ModelAttribute("language") Language language, BindingResult result) {
		if (result.hasErrors()) {
            return "edit.jsp";
        } else {
            languageService.updateLanguage(language);
            return "redirect:/languages";
        }
	}
	
	@GetMapping("/languages/{id}/delete")
	public String delete(@PathVariable("id") Long id) {
		this.languageService.deleteLanguage(id);
		return "redirect:/languages";
	}
	
}
