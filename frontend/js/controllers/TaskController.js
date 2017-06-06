module.exports = {
    name: "TaskController",
    func: function ($scope, TaskService) {
        $scope.tasks = TaskService.getTasks();
        $scope.markComplete = function(task) {
            TaskService.completeTask(task);
        }
        
    }
} 