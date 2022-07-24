package com.example.demo;

//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

@RestController
public class Home {
	@RequestMapping("")
	public String hello() {
			return "Hello World";
		}

	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String getTest() {
		return "get Request test";
	}


	// @RequestMapping("/error")
	// public String errormsg() {
	// return "404";
	// }

	// @RequestMapping("/login/{username}")
	// public String login(@PathVariable("username") username ) {
	//
	// }
}
