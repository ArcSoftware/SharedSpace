package com.theironyard.charlotte.SharedSpace.controllers;

import com.theironyard.charlotte.SharedSpace.entities.Task;
import com.theironyard.charlotte.SharedSpace.entities.User;
import com.theironyard.charlotte.SharedSpace.repositories.TaskRepo;
import com.theironyard.charlotte.SharedSpace.repositories.UserRepo;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
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

    @CrossOrigin
    @RequestMapping(path = "/getTasks", method = RequestMethod.GET)
    public ArrayList<Task> getTasks(boolean complete) {
        return (ArrayList<Task>) tasks.findByComplete(complete);
    }

    @CrossOrigin
    @RequestMapping(path = "/addTask", method = RequestMethod.POST)
    public void addTask(@RequestBody Task task) {
        System.out.println(task + "the task, the points = " + task.getPoints());
        tasks.save(task);
    }

    @CrossOrigin
    @RequestMapping(path = "/addTestUser", method = RequestMethod.POST)
    //Makes a test user to test the system. Tested and works.
    public void addTestTask() {
        User testUser = new User("test", 0);
        Task newTask = new Task("test this crap", false, 100, testUser);
        System.out.println("Adding new test task: " + newTask.getTaskName());
        System.out.println(newTask.getId());
        System.out.println(newTask.getPoints());
        System.out.println(newTask.getUser().getUserName());
        users.save(testUser);
        tasks.save(newTask);
    }

    @CrossOrigin
    @RequestMapping(path = "/markComplete", method = RequestMethod.POST)
    public void completeTask(@RequestBody String userName, Integer taskID) {
        User currentUser = users.findByuserName(userName);
        Task currentTask = tasks.findOne(taskID);
        currentTask.setComplete(true);
        currentTask.setUser(currentUser);
        tasks.save(currentTask);
    }

    @CrossOrigin
    @RequestMapping(path = "/userPoints", method = RequestMethod.GET)
    public ArrayList<User> userNamePoints() {
        System.out.println("Sending an array of users with their points.");
        return (ArrayList<User>) users.findAll();
    }

    @CrossOrigin
    @RequestMapping(path = "/user", method = RequestMethod.GET)
    //mapping to check is user is logged in session.
    public String userName(HttpSession session) {
        return (String) session.getAttribute("userName");
    }

    @CrossOrigin
    @RequestMapping(path = "/login", method = RequestMethod.POST)
    public User login(HttpSession session, @RequestBody User user) {
        session.setAttribute("user", user.getUserName());
        if (users.findByuserName(user.getUserName()) == null) {
            users.save(user);
            System.out.println("New user was created for " + user.getUserName());
        } else {
            System.out.println("User exists already for " + user.getUserName() + ". Logging in as that user.");
        }
        return user;
    }

    @CrossOrigin
    @RequestMapping(path = "/logout", method = RequestMethod.POST)
    public void logout(HttpSession session) {
        session.invalidate(); //logout invalidates session.
    }
}
