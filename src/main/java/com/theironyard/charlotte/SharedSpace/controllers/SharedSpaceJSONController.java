package com.theironyard.charlotte.SharedSpace.controllers;

import com.theironyard.charlotte.SharedSpace.entities.Task;
import com.theironyard.charlotte.SharedSpace.entities.User;
import com.theironyard.charlotte.SharedSpace.repositories.TaskRepo;
import com.theironyard.charlotte.SharedSpace.repositories.UserRepo;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

/**
 * Created by Jake on 5/30/17.
 */
@RestController
public class SharedSpaceJSONController {
    TaskRepo tasks;
    UserRepo users;

    public SharedSpaceJSONController(TaskRepo tasks, UserRepo users) {
        this.tasks = tasks;
        this.users = users;
    }

    @RequestMapping(path = "/getTasks", method = RequestMethod.GET)
    public ArrayList<Task> getTasks(boolean complete) {
        if (complete == false) {
            return (ArrayList<Task>) tasks.findAll();
        } else {
            return (ArrayList<Task>) tasks.findByComplete(true);
        }
    }

    @RequestMapping(path = "/addTask", method = RequestMethod.GET)
    public void addTask(@RequestBody String user, String task, int points) {
        User newUser = new User();
        newUser.setUsername(user);
        Task newTask = new Task(task, false, newUser, points);
        tasks.save(newTask);
    }

    @RequestMapping(path = "/markComplete", method = RequestMethod.POST)
    public void completeTask(@RequestBody String user, int taskID) {
        User currentUser = users.findOne(;
        Task currentTask = tasks.findOne(taskID);
    }
}
