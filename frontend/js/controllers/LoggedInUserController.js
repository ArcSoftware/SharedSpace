module.exports={
    name: "LoggedInUserController",
    func: function ($scope, SignInService){
        console.log('hello');
        $scope.user=SignInService.getLoggedInUser();
    }
}