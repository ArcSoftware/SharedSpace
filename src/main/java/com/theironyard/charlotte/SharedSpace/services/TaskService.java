package com.theironyard.charlotte.SharedSpace.services;

import com.theironyard.charlotte.SharedSpace.entities.Task;
import com.theironyard.charlotte.SharedSpace.entities.User;
import com.theironyard.charlotte.SharedSpace.repositories.TaskRepo;
import com.theironyard.charlotte.SharedSpace.repositories.UserRepo;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;
import java.time.Instant;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
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
        User testUser = new User("test", 100);
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
        User currentUser = users.findByuserName((String)session.getAttribute("userName"));
        System.out.println("User is " + currentUser.getUserName());
        Task currentTask = tasks.findOne(taskID);
        System.out.println("Task is " + currentTask.getTaskName());
        System.out.println("Task points: " + currentTask.getPoints());
        Integer points = currentUser.getPoints();
        points = points == null ? 0 : points;
        currentUser.setPoints(points + currentTask.getPoints());
        currentTask.setComplete(true);
        currentTask.setUser(currentUser);
        currentTask.setTime(Instant.now().atZone(ZoneId.of("UTC-4")).format(DateTimeFormatter.ISO_LOCAL_DATE_TIME));
        System.out.println("Marking " + currentTask.getTaskName() + "complete by " + currentTask.getUser().getUserName()
                + " at " + currentTask.getTime());
        users.save(currentUser);
        tasks.save(currentTask);
    }

    public void completeTaskSlack(String userName, String task) {
        User currentUser = users.findByuserName(userName);
        Task currentTask = tasks.findFirstByTaskName(task);
        if (currentTask == null) {
            System.out.println("Invalid task");
        } else {
            if (currentUser == null) {
                currentUser = new User();
                currentUser.setUserName(userName);
                System.out.println("Creating a new user for " + currentUser.getUserName());
            }
            currentUser.setPoints(currentUser.getPoints() + currentTask.getPoints());
            currentTask.setComplete(true);
            currentTask.setUser(currentUser);
            currentTask.setTime(Instant.now().atZone(ZoneId.of("UTC-4")).format(DateTimeFormatter.ISO_LOCAL_DATE_TIME));
            System.out.println("Marking " + currentTask.getTaskName() + "complete by "
                    + currentTask.getUser().getUserName());
            users.save(currentUser);
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
