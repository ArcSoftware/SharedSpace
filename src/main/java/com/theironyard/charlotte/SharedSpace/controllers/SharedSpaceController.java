package com.theironyard.charlotte.SharedSpace.controllers;

import com.theironyard.charlotte.SharedSpace.entities.User;
import com.theironyard.charlotte.SharedSpace.repositories.UserRepo;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpSession;

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
    public String homePage(Model model, HttpSession session) {
        String userName = (String) session.getAttribute("userName");
        User user = users.findByuserName(userName);
        if (user != null) {
            model.addAttribute("user", user); //lets us use mustache to fill out user
        }
        return "index";
    }



}
