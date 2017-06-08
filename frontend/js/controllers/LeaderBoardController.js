module.exports={
    name: "LeaderBoardController",
    func: function($scope, LeaderBoardService){
       $scope.leadUsers= LeaderBoardService.getLeadUsers();
        
        //console.log(labels.push);
        $scope.labels = LeaderBoardService.getUserName();
        $scope.series = ['Series A'];
        $scope.data = LeaderBoardService.getPointData();
        console.log($scope.labels);
    }
}