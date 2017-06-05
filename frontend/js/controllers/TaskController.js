module.exports = {
    name: "TaskController",
    func: function ($scope, TaskService) {
        $scope.tasks = TaskService.getTasks();
        $scope.completed = TaskService.getComplete();
        $scope.markComplete = function(task) {
            $scope.tasks = TaskService.completeTask(task);
        }
        // need a create task call here
    }
} 