package com.example.demo;

import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class Home {
	@RequestMapping("")
	public String hello() {
		return "index.jsp";
	}
}
