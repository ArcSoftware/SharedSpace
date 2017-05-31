package com.theironyard.charlotte.SharedSpace.entities;

import javax.persistence.*;

@Entity
@Table(name = "tasks")
public class Task {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    int id;

    @Column(nullable = false)
    String taskName;

    @Column(nullable = false)
    boolean complete;

    @Column
    int points;

    @ManyToOne
    User user;

    public Task() {
    }

    public Task(int id, String taskName, boolean complete, int points, User user) {
        this.id = id;
        this.taskName = taskName;
        this.complete = complete;
        this.points = points;
        this.user = user;
    }

    public Task(String taskName, boolean complete, int points, User user) {
        this.taskName = taskName;
        this.complete = complete;
        this.points = points;
        this.user = user;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }

    public boolean isComplete() {
        return complete;
    }

    public void setComplete(boolean complete) {
        this.complete = complete;
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
