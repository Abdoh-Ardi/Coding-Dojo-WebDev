package com.example.demo.OmikujiForm;

import java.util.Enumeration;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("Omikuji")
public class OmikujiController {
    @GetMapping(value = "")
    public String index() {
        return "Omikuji/Omikuji.jsp";
    }

    @PostMapping(value = "/submit")
    public String submit(HttpSession session,
            @RequestParam("numbers") int numbers, // just to avoid repeating statements for it, its string
            @RequestParam("cityName") String cityName,
            @RequestParam("personName") String personName,
            @RequestParam("hobby") String hobby,
            @RequestParam("somethingNice") String somethingNice,
            @RequestParam("livingThing") String livingThing) {
        session.setAttribute("numbers", numbers);
        session.setAttribute("cityName", cityName);
        session.setAttribute("personName", personName);
        session.setAttribute("hobby", hobby);
        session.setAttribute("livingThing", livingThing);
        session.setAttribute("somethingNice", somethingNice);

        return "redirect:./show";
    }

    @GetMapping(value = "/show")
    public String show(HttpSession session, Model model) {
        Enumeration<String> attributes = session.getAttributeNames();
        // iterate over all elements in session
        while (attributes.hasMoreElements()) {
            String attr = attributes.nextElement();
            model.addAttribute(attr, session.getAttribute(attr));
            System.out.println("attr Name = " + attr + "get attr result" + session.getAttribute(attr));
        }
        return "Omikuji/show.jsp";
    }

}
