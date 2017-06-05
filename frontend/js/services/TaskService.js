module.exports = {
    name: 'TaskService',
    func: function ($http) {
        let tasks = [];

        $http.get('https://sharedspace.herokuapp.com/getTasks').then(function (response) {
            for (let i = 0; i < response.data.length; i++) {

                tasks.push({
                    id: response.data[i].id,
                    taskName: response.data[i].taskName,
                    complete: response.data[i].complete,
                    points: response.data[i].points,
                    // n.b. we don't care about WHO makes the task - just who completes it
                    // user: {
                    //     id: response.data[i].user.id,
                    //     userName: response.data[i].user.userName,
                    //     points: response.data[i].user.points,
                    // }
                })
            }
        });

        let completed = [];

        // retrieve tasks that have been completed (complete === true)
        $http.get('https://sharedspace.herokuapp.com/getTasks?complete=true').then(function (response) {
            for (let i = 0; i < response.data.length; i++) {

                let name;
                if (response.data[i].user === null ||
                    response.data[i].user === undefined ||
                    response.data[i].user === '') {
                    name = 'Anonymous';
                } else {
                    name = response.data[i].user;
                }

                completed.push({
                    id: response.data[i].id,
                    taskName: response.data[i].taskName,
                    complete: response.data[i].complete,
                    points: response.data[i].points,
                    user: name,
                })
            }
        });


        return {
            getTasks: function () {
                return tasks;
            },
            completeTask(task) {
                $http.post('https://sharedspace.herokuapp.com/markComplete', task.id).then(function (response) {
                    console.log('post request submitted');
                    completed.push(tasks.pop());
                    // console.log(tasks);
                    // console.log(completed);
                })
            },
            getComplete: function () {
                console.log('get complete run');
                return completed;
            },
            newTask(name, points) {
                let newTask = {
                    taskName: name,
                    points: points
                };
                $http.post('https://sharedspace.herokuapp.com/addTask', newTask).then(function (response) {
                   console.log('new task submitted');
                })
            },
            
        }
    },

}

