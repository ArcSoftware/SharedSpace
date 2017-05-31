package com.theironyard.charlotte.SharedSpace.controllers;

import com.theironyard.charlotte.SharedSpace.repositories.UserRepo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by Jake on 5/30/17.
 */
@Controller
public class SharedSpaceController {
    UserRepo users;

    public SharedSpaceController(UserRepo users) {
        this.users = users;
    }

    @RequestMapping(path = "/", method = RequestMethod.GET)
    public String homePage() {
        return "index";
    }

}
