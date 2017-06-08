package com.theironyard.charlotte.SharedSpace.services;

import com.theironyard.charlotte.SharedSpace.entities.User;
import com.theironyard.charlotte.SharedSpace.repositories.TaskRepo;
import com.theironyard.charlotte.SharedSpace.repositories.UserRepo;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;

/**
 * Created by Jake on 6/1/17.
 */
@Service
public class UserService {
    private UserRepo users;
    private TaskRepo tasks;

    public UserService(UserRepo users, TaskRepo tasks) {
        this.users = users;
        this.tasks = tasks;
    }

    public ArrayList<User> getAllUsers() {
        System.out.println("Sending an array of users with their points.");
        return (ArrayList<User>) users.findAll();
    }

    public String checkSession(HttpSession session) {
        return (String) session.getAttribute("userName");
    }

    public void login(HttpSession session, User user) {
        session.setAttribute("userName", user.getUserName());
        if (users.findByuserName(user.getUserName()) == null) {
            users.save(user);
            System.out.println("New user was created for " + user.getUserName());
        } else {
            System.out.println("User exists already for " + user.getUserName() + ". Logging in as that user.");
        }
    }

    public void logout(HttpSession session) {
        session.invalidate();
    }
}
