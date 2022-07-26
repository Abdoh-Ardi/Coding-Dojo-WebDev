package com.example.demo.counter;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("counter")
public class CounterController {
    @GetMapping(value = "")
    public String index(HttpSession session, Model model) {
        Object count = session.getAttribute("counterControllerVisit");// retrieved from Home.java
        if (count != null) {
            model.addAttribute("count", (Integer) count);
        }
        return "counter.jsp";
    }

}
