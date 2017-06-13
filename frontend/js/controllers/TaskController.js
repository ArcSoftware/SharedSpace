module.exports = {
    name: "TaskController",
    func: function ($scope, TaskService, SignInService) {
        $scope.tasks = TaskService.getTasks();
        $scope.markComplete = function(task) {
            TaskService.completeTask(task);
        }
        
    }
} 