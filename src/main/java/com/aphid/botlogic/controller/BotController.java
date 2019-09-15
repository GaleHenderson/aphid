package com.aphid.botlogic.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class BotController {
	
	@RequestMapping("/")
	public ModelAndView index() {
		String wassup = "Hello World!";
		return new ModelAndView("index", "homepage", wassup);
	}

	

}
