package com.theironyard.charlotte.SharedSpace.repositories;

import com.theironyard.charlotte.SharedSpace.entities.User;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Jake on 5/30/17.
 */
public interface UserRepo extends CrudRepository<User, Integer> {
}
