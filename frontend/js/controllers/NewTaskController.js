module.exports = {
  name: "NewTaskController",
  func: function ($scope, TaskService) {

    $scope.submit = function () {
      TaskService.newTask($scope.taskName, $scope.taskPoints);
    }
  }
}