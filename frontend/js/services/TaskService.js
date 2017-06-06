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
                })
            }
        });

        // let completed = []; no longer needed

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
                // was completed array
                tasks.push({
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

                    // completed.push(tasks.pop());
                    task.complete = true;


                })
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

