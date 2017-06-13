module.exports={
    name: "LoggedInUserController",
    func: function ($scope, SignInService){
        console.log('hi');
        $scope.user=SignInService.getLoggedInUser();
       // $scope.userName='';
    }
}