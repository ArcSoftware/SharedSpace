package com.theironyard.charlotte.SharedSpace.controllers;

import com.theironyard.charlotte.SharedSpace.services.TaskService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class SharedSpaceController {
    TaskService taskService;

    public SharedSpaceController(TaskService taskService) {
        this.taskService = taskService;
    }

    @RequestMapping(path = "/", method = RequestMethod.GET)
    public String homePage() {
        return "index";
    }

    @CrossOrigin
    @RequestMapping(path = "/claimTasks", method = RequestMethod.POST)
    public String claimTasks(String user_name, String text) {
        taskService.completeTaskSlack(user_name, text);
        return "index";
    }

    @CrossOrigin
    @RequestMapping(path = "/createTask", method = RequestMethod.POST)
    public String createTaskSlack(String user_name, String text) {
        taskService.createTaskSlack(user_name, text);
        return "index";
    }
}
