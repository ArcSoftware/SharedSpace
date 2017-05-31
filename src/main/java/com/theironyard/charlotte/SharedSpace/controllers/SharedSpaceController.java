package com.theironyard.charlotte.SharedSpace.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by Jake on 5/30/17.
 */
@Controller
public class SharedSpaceController {

    @RequestMapping(path = "/", method = RequestMethod.GET)
    public String homePage() {
        return "index";
    }

    @RequestMapping(path = "/leaderboard", method = RequestMethod.GET)
    public String leaderboard() {
        return "leaderboard";
    }


}
