module.exports = {
    name: "AllCompleteController",
    func: function ($scope, TaskService) {
        $scope.tasks = TaskService.getTasks();
    }
} 