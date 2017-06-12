package com.theironyard.charlotte.SharedSpace.controllers;

import com.theironyard.charlotte.SharedSpace.entities.Task;
import com.theironyard.charlotte.SharedSpace.entities.Text;
import com.theironyard.charlotte.SharedSpace.entities.User;
import com.theironyard.charlotte.SharedSpace.services.TaskService;
import com.theironyard.charlotte.SharedSpace.services.TextService;
import com.theironyard.charlotte.SharedSpace.services.UserService;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;

/**
 * Created by Jake on 5/30/17.
 */
@RestController
public class SharedSpaceJSONController {
    private TaskService taskService;
    private UserService userService;
    private TextService textService;

    public SharedSpaceJSONController(TaskService taskService, UserService userService, TextService textService) {
        this.taskService = taskService;
        this.userService = userService;
        this.textService = textService;
    }

    @CrossOrigin
    @RequestMapping(path = "/getTasks", method = RequestMethod.GET)
    public ArrayList<Task> getTasks(boolean complete) {
        return taskService.getTasks(complete);
    }

    @CrossOrigin
    @RequestMapping(path = "/getTasks", method = RequestMethod.POST)
    public Text getTasks() {
        return textService.createTextTasks();
    }

    @CrossOrigin
    @RequestMapping(path = "/addTask", method = RequestMethod.POST)
    public void addTask(@RequestBody Task task) {
        taskService.createTask(task);
    }

    @CrossOrigin
    @RequestMapping(path = "/addTestTask", method = RequestMethod.POST)
    public void addTestTask() {
        taskService.createTestTask();
    }

    @CrossOrigin
    @RequestMapping(path = "/markComplete", method = RequestMethod.POST)
    public void completeTask(HttpSession session, @RequestBody Integer taskID) {
        taskService.markTaskComplete(session, taskID);
    }

    @CrossOrigin
    @RequestMapping(path = "/userPoints", method = RequestMethod.GET)
    public ArrayList<User> userNamePoints() {
        return userService.getAllUsers();
    }

    @CrossOrigin
    @RequestMapping(path = "/user", method = RequestMethod.GET)
    public String userName(HttpSession session) {
        return userService.checkSession(session);
    }

    @CrossOrigin
    @RequestMapping(path = "/login", method = RequestMethod.POST)
    public void login(HttpSession session, @RequestBody User user) {
        userService.login(session, user);
    }

    @CrossOrigin
    @RequestMapping(path = "/logout", method = RequestMethod.POST)
    public void logout(HttpSession session) {
         userService.logout(session);
    }
}
