package com.theironyard.charlotte.SharedSpace.entities;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {
   @Id
    @GeneratedValue
    int id;

   @Column(unique = true)
    String username;

    @Column
    int points;

    public User() {
    }

    public User(String username, int points) {
        this.username = username;
        this.points = points;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }
}
