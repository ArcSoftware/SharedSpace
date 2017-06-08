module.exports={
    name: "LeaderBoardController",
    func: function($scope, LeaderBoardService, $state, LogoutService){
       $scope.leadUsers= LeaderBoardService.getLeadUsers();
       
       // next three lines go into the nav controller
       // don't forget $state and LogoutService
       $scope.logout = function() {
           LogoutService.logout();
            $state.go('signin');
       };
        
        //console.log(labels.push);
        $scope.labels = LeaderBoardService.getUserName();
        $scope.series = ['Series A'];
        $scope.data = LeaderBoardService.getPointData();
        console.log($scope.labels);
        // $scope.data = data;
    //      [25, 59, 80, 81, 56, 55, 40]
    //     // [28, 48, 40, 19, 86, 27, 90]
    //   ];
    }
}