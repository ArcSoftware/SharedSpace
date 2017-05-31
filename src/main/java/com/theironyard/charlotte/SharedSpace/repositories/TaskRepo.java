package com.theironyard.charlotte.SharedSpace.repositories;

import com.theironyard.charlotte.SharedSpace.entities.Task;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by Jake on 5/30/17.
 */
public interface TaskRepo extends CrudRepository<Task, Integer> {
    List<Task> findByComplete(boolean complete);
}
