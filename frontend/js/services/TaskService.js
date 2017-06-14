 module.exports = {
    name: 'TaskService',
    func: function ($http) {

        return {
            getTasks: function () {
                // let tasks = [];

            const get_incomplete = $http.get('https://sharedspace.herokuapp.com/getTasks').then(function (response) {
                const tasks = [];

                for (let i = 0; i < response.data.length; i++) {

                    tasks.push({
                        id: response.data[i].id,
                        taskName: response.data[i].taskName,
                        complete: response.data[i].complete,
                        points: response.data[i].points,
                        time: response.data[i].time,
                    })
                }

                return tasks;
            });

        // retrieve tasks that have been completed (complete === true)
        const get_complete = $http.get('https://sharedspace.herokuapp.com/getTasks?complete=true', { withCredentials: true }).then(function (response) {
            const tasks = [];

            for (let i = 0; i < response.data.length; i++) {
                let name;

                if (response.data[i].user === null ||
                    response.data[i].user === undefined ||
                    response.data[i].user === '') {
                    name = 'You';
                } else {
                    name = response.data[i].user;
                }
                
                tasks.push({
                    id: response.data[i].id,
                    taskName: response.data[i].taskName,
                    complete: response.data[i].complete,
                    points: response.data[i].points,
                    time: response.data[i].time,
                    user: name,
                })
            }

            return tasks;
        });
                
                /**
                 * Promise.all is a built-in function that returns a promise. This promise
                 * completes when all of the promises we pass in complete.
                 */
                return Promise.all([get_incomplete, get_complete]).then(function (tasks) {
                    const full = [];

                    // push all incomplete tasks
                    for (let i = 0; i < tasks[0].length; i++) {
                        full.push(tasks[0][i]);
                    }

                    // push all complete tasks
                    for (let i = 0; i < tasks[1].length; i++) {
                        full.push(tasks[1][i]);
                    }

                    return full;
                });
                // return an array
                // return tasks;
        },


            completeTask(task) {
                console.log(task.id);
                console.log(task.complete);
                
                $http.post('https://sharedspace.herokuapp.com/markComplete', task.id, { withCredentials: true }).then(function (response) {
                    console.log('post request submitted');
                    // completed.push(tasks.pop());
                    task.complete = true;
                    console.log(task.time);
                })
            },
            newTask(name, points) {
                let newTask = {
                    taskName: name.toLowerCase(),
                    points: points
                };
                //https://192.168.1.4:8080/addTask
                return $http.post('https://sharedspace.herokuapp.com/addTask', newTask, { withCredentials: true }).then(function (response) {
                   console.log('new task submitted');
                })
            },
            
        }
    },

}

