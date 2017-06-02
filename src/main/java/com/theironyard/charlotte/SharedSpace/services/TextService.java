package com.theironyard.charlotte.SharedSpace.services;

import com.theironyard.charlotte.SharedSpace.entities.Task;
import com.theironyard.charlotte.SharedSpace.entities.Text;
import com.theironyard.charlotte.SharedSpace.repositories.TaskRepo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class TextService {
    TaskRepo tasks;

    public TextService(TaskRepo tasks) {
        this.tasks = tasks;
    }

    public Text createTextTasks() {
        ArrayList<Task> completeTasks = (ArrayList<Task>) tasks.findByComplete(false);
        ArrayList<Text.Field> fieldarray = new ArrayList<>();

        for (int i = 0; i < completeTasks.size(); i++) {
            Text.Field field = new Text.Field();
            field.title = completeTasks.get(i).getTaskName();
            field.value = String.valueOf(completeTasks.get(i).getPoints());
            fieldarray.add(field);
        }

        Text output = new Text(fieldarray);

        output.text = "Here are all the incomplete tasks: ";
        System.out.println("Posting all the tasks to Slack!");

        return output;
    }
}
