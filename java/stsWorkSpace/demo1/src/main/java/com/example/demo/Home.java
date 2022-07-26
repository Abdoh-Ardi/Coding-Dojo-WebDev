package com.example.demo;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class Home {
	@RequestMapping("")

	public String home(HttpSession session) {
		if (session.getAttribute("counterControllerVisit") == null) {
			session.setAttribute("counterControllerVisit", 1);// 1 becuase this is the first visit
		} else {
			session.setAttribute("counterControllerVisit",
					(Integer) session.getAttribute("counterControllerVisit") + 1);
		}

		return "index.jsp";
	}
}
