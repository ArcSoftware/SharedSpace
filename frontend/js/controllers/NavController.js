module.exports = {
    name: "NavController",
    func: function ($scope, LogoutService, $state, NavService) {
        $scope.logout = function() {
           LogoutService.logout();
            $state.go('signin');
       },
       $scope.toggleNav = function () {
            NavService.toggleNav();
        }
    }
}