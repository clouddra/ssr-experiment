package hello.controllers;

import hello.models.Greeting;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @RequestMapping("/")
    public Greeting index() {
        return new Greeting(2, "hello");
    }

}