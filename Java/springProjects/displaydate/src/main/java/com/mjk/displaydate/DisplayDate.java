package com.mjk.displaydate;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class DisplayDate {
	
	@RequestMapping("/")
	public String index() {
		return "index.jsp";
	}

	
	@RequestMapping("/date")
	public String date(Model model) {
		SimpleDateFormat formatter = new SimpleDateFormat("EEEEE, 'the' dd 'of' MMMM, yyyy");
		Date date = new Date();
		System.out.println(formatter.format(date));
		
		model.addAttribute("date", formatter.format(date));
		return "date.jsp";
	}
	
	
	@RequestMapping("/time")
	public String time(Model model) {
		SimpleDateFormat formatter = new SimpleDateFormat("hh:mm a");
		Date time = new Date();
		System.out.println(formatter.format(time));
		
		model.addAttribute("time", formatter.format(time));
		return "time.jsp";
	}
	
}
