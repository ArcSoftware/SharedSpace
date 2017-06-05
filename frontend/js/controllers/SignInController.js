module.exports = {
    name: "SignInController",
    func: function ($scope, SignInService) {

        $scope.go = function () {
            SignInService.showUsers($scope.user_name);
            console.log('$scope.user_name');
        }
    }
}