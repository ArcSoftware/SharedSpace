module.exports = {
    name: "TaskController",
    func: function ($scope, TaskService, SignInService, $interval) {
        // $scope.tasks = TaskService.getTasks();
        TaskService.getTasks().then(function (tasks) {
            $scope.tasks = tasks; 
        });

        $scope.markComplete = function(task) {
            TaskService.completeTask(task);
        }

        $interval(function() {
            TaskService.getTasks().then(function (tasks) {
                $scope.tasks = tasks;
            });
        }, 1000)

        // $scope.intervalFunction();        
    }
} 