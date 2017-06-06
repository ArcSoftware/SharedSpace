module.exports = {
  name: "NewTaskController",
  func: function ($scope, TaskService, $state) {

    $scope.submit = function () {
      TaskService.newTask($scope.taskName, $scope.taskPoints).then(function() {
        $state.go('tasks');
      });
    }
  }
}