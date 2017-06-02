package com.theironyard.charlotte.SharedSpace.controllers;

import com.theironyard.charlotte.SharedSpace.entities.Text;
import com.theironyard.charlotte.SharedSpace.services.TaskService;
import com.theironyard.charlotte.SharedSpace.services.TextService;
import com.theironyard.charlotte.SharedSpace.services.UserService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Jake on 6/2/17.
 */
@RestController
public class SharedSpaceSlackController {
    private TaskService taskService;
    private UserService userService;
    private TextService textService;

    public SharedSpaceSlackController(TaskService taskService, UserService userService, TextService textService) {
        this.taskService = taskService;
        this.userService = userService;
        this.textService = textService;
    }

    @CrossOrigin
    @RequestMapping(path = "/getTasks", method = RequestMethod.POST)
    public Text getTasks() {
        return textService.createTextTasks();
    }

}
