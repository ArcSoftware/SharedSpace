module.exports = {
    name: 'TaskService',
    func: function ($http) {
        let tasks = [];
        // jakes IP
        $http.get('https://sharedspace.herokuapp.com/getTasks').then(function (response) {
            for (let i = 0; i < response.data.length; i++) {
                tasks.push({
                    id: response.data[i].id,
                    taskName: response.data[i].taskName,
                    complete: response.data[i].complete,
                    points: response.data[i].points,
                    user: {
                        id: response.data[i].user.id,
                        userName: response.data[i].user.userName,
                        points: response.data[i].user.points,
                    }
                })
            }
        });

        return {
            getTasks: function () {
                return tasks;
            }
        }
    }
}