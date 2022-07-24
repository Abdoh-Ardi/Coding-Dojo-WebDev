package com.example.demo.Daikichi;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("daikichi")
public class DaikichiController {
    // shortcut for @RequestMapping(method = RequestMethod.GET).
    @GetMapping("")
    public String index() {
        return "Welcome!";
    }

    @GetMapping("/today")
    public String todayMsg() {
        return "Today you will find luck in all your endeavors!";
    }

    @GetMapping("/tomorrow")
    public String tomorrowMsg() {
        return "Tomorrow, an opportunity will arise, so be sure to be open to new ideas!";
    }

}
