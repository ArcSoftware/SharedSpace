package com.theironyard.charlotte.SharedSpace.entities;

import javax.persistence.*;

@Entity
@Table(name = "tasks")
public class Task {
    @Id
    @GeneratedValue
    int id;

    @Column(nullable = false)
    String taskName;

    @Column(nullable = false)
    boolean complete;

    @ManyToOne
    String userName;

    @Column
    int points;

    public Task() {
    }

    public Task(String taskName, boolean complete, String userName, int points) {
        this.taskName = taskName;
        this.complete = complete;
        this.userName = userName;
        this.points = points;
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

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }
}
