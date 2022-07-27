package com.example.demo.HelloHuman;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("Hello")
public class Hello {
    @GetMapping(value = "")
    public String index() {
        return "Hello Human";
    }
    
    // http://localhost:8080/Hello/?name=abdo&last_name=ardi for quick access
    @GetMapping(value = "/")
    public String helloHuman(@RequestParam(value = "name", required = false) String firstName,
            @RequestParam(value = "last_name", required = false) String lastName) {
        String userName = "";
        if (!firstName.isEmpty()) {
            userName += firstName;
        }
        if (!lastName.isEmpty()) {
            userName += " " + lastName;
        }
        return !userName.isEmpty() ? "Hello " + userName : "Hello Human";
    }

}
