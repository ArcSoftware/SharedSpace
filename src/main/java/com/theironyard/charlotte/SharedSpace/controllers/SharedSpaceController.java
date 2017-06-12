package com.theironyard.charlotte.SharedSpace.controllers;

import com.theironyard.charlotte.SharedSpace.services.ImageService;
import com.theironyard.charlotte.SharedSpace.services.TaskService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
public class SharedSpaceController {
    TaskService taskService;
    ImageService imageService;

    public SharedSpaceController(TaskService taskService, ImageService imageService) {
        this.taskService = taskService;
        this.imageService = imageService;
    }

    @RequestMapping(path = "/", method = RequestMethod.GET)
    public String homePage() {
        return "index";
    }

    @CrossOrigin
    @RequestMapping(path = "/claimTasks", method = RequestMethod.POST)
    public String claimTasks(String user_name, String text) {
        taskService.completeTaskSlack(user_name, text);
        return "SlackResponse";
    }

    @CrossOrigin
    @RequestMapping(path = "/createTask", method = RequestMethod.POST)
    public String createTaskSlack(String user_name, String text) {
        taskService.createTaskSlack(user_name, text);
        return "SlackResponse";
    }

    @RequestMapping(path = "/image", method = RequestMethod.GET)
    @ResponseBody
    public void image(String img, HttpServletResponse response) throws IOException {
        response.sendRedirect(imageService.getLink(img));
    }
}
