package com.example.demo.controllers.MvcDesignPatternAssignments.Daikichi;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

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
    // http://localhost:8080/daikichi/travel/china
    @RequestMapping("/travel/{cityName}")
    public String travelMsg(@PathVariable(name = "cityName") String cityName) {
        return "Congratulations! You will soon travel to " + cityName + "!";

    }
    // http://localhost:8080/daikichi/lotto/1
    @RequestMapping("/lotto/{number}")
    public String lottoMsg(@PathVariable(name = "number") int number) {
        return number % 2 == 0 ? "You will take a grand journey in the near future, but be weary of tempting offers"
                : "You have enjoyed the fruits of your labor but now is a great time to spend time with family and friends.";
    }
}
