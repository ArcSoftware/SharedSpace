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
        return (ArrayList<Task>) tasks.findByComplete(complete);
    }

    @RequestMapping(path = "/addTask", method = RequestMethod.POST)
    public void addTask(@RequestBody String task, Integer points) {
        User testUser = new User("test", 0);
        System.out.println(task + "the task, the points = " + points);
        Task newTask = new Task(task, false, points, null);
        tasks.save(newTask);
    }

    @RequestMapping(path = "/addTestUser", method = RequestMethod.POST)
    public void addTask() {
        User testUser = new User("test", 0);
        Task newTask = new Task("test this crap", false, 100, testUser);
        System.out.println("Adding new test task: " + newTask.getTaskName());
        System.out.println(newTask.getId());
        System.out.println(newTask.getPoints());
        System.out.println(newTask.getUser().getUserName());
        users.save(testUser);
        tasks.save(newTask);
    }

    @RequestMapping(path = "/markComplete", method = RequestMethod.POST)
    public void completeTask(@RequestBody String userName, Integer taskID) {
        User currentUser = users.findByuserName(userName);
        Task currentTask = tasks.findOne(taskID);
        currentTask.setComplete(true);
        currentTask.setUser(currentUser);
        tasks.save(currentTask);
    }

    @RequestMapping(path = "/userName", method = RequestMethod.GET)
    public ArrayList<User> userNamePoints(String userName) {
        if (userName != "all") {
            ArrayList<User> singleUser = new ArrayList<>();
            User currentUser = users.findByuserName(userName);
            singleUser.add(currentUser);
            return singleUser;
        } else {
            return (ArrayList<User>) users.findAll();
        }

    }
}
