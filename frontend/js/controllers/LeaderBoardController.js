module.exports={
    name: "LeaderBoardController",
    func: function($scope, LeaderBoardService){
        $scope.leadUsers= LeaderBoardService.getLeadUsers();


    }
}