module.exports={
    name: "SignInController",
    func: function($scope, SignInService){
       
       $scope.go=function(){
           SignInService.showUser($scope.user_name);
           console.log('hello');
       }
    }
}