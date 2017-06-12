module.exports = {
    name: "SignInController",
    func: function ($scope, SignInService) {

        $scope.go = function () {
            SignInService.showUsers($scope.user_name);
            console.log('$scope.user_name');
        },

        $scope.loggedIn = function () {
            if (SignInService.isLoggedIn() === false) {
                console.log('not logged in');
                $state.go('signin');
            } else {
                console.log('logged in');
            }
        }
    }
}