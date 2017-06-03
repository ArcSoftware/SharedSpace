module.exports = {
    name: "TaskController",
    func: function ($scope, TaskService) {
        $scope.tasks = TaskService.getTasks();
        $scope.completed = TaskService.getComplete();
        $scope.markComplete = function(task) {
            // service call here (value is already changed to the right value)
            $scope.tasks = TaskService.completeTask(task);
        }
    }
} 