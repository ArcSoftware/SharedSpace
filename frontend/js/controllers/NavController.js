module.exports = {
    name: "NavController",
    func: function ($scope, LogoutService, $state) {
        $scope.logout = function() {
           LogoutService.logout();
            $state.go('signin');
       }
    }
}