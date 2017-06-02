package com.theironyard.charlotte.SharedSpace.services;

import com.theironyard.charlotte.SharedSpace.entities.Task;
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
public class TaskService {
    private UserRepo users;
    private TaskRepo tasks;

    public TaskService(UserRepo users, TaskRepo tasks) {
        this.users = users;
        this.tasks = tasks;
    }

    public void createTestTask() {
        User testUser = new User("test", 0);
        Task newTask = new Task("test this crap", false, 100, testUser);
        System.out.format("New test task: %s \n Task points: %d \n Task user: %s \n", newTask.getTaskName(),
                newTask.getPoints(), newTask.getUser().getUserName());
        users.save(testUser);
        tasks.save(newTask);
    }

    public void createTask(Task task) {
        System.out.format("New task: %s \n Task points: %d \n", task.getTaskName(),
                task.getPoints());
        tasks.save(task);
    }

    public ArrayList<Task> getTasks(boolean complete) {
        return (ArrayList<Task>) tasks.findByComplete(complete);
    }

    public void markTaskComplete(HttpSession session, int taskID) {
        User currentUser = users.findByuserName((String) session.getAttribute("userName"));
        Task currentTask = tasks.findOne(taskID);
        currentTask.setComplete(true);
        currentTask.setUser(currentUser);
        System.out.println("Marking " + currentTask.getTaskName() + "complete by " + currentTask.getUser());
        tasks.save(currentTask);
    }

    public void completeTaskSlack(String userName, String task) {
        User currentUser = users.findByuserName(userName);
        Task currentTask = tasks.findBytaskName(task);
        if (currentUser == null || currentUser == null) {
            System.out.println("Invalid user or task found");
        } else {
            currentTask.setComplete(true);
            currentTask.setUser(currentUser);
            System.out.println("Marking " + currentTask.getTaskName() + "complete by " + currentTask.getUser());
            tasks.save(currentTask);
        }
    }

    public void createTaskSlack(String userName, String taskName) {
        Task newTask = new Task(taskName, false, 100, null);
        System.out.format("New task: %s \n created by : %s via Slack for 100 points!\n", newTask.getTaskName(),
                userName);
        tasks.save(newTask);
    }

}
