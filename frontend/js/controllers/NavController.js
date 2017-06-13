module.exports = {
    name: "NavController",
    func: function ($scope, LogoutService, $state) {
        $scope.logout = function() {
           LogoutService.logout();
            $state.go('signin');
       },
        $scope.expanded = true;
        $scope.toggle = function() {
            $scope.expanded = !$scope.expanded;
            console.log('clicked');
        }
    }
}