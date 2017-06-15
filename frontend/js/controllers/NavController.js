module.exports = {
    name: "NavController",
    func: function ($scope, LogoutService, DeviceService, $state) {
        $scope.logout = function() {
           LogoutService.logout();
            $state.go('signin');
       };
       if (DeviceService.getDevice() === 'mobile') {
        $scope.expanded = false;   
       } else {
        $scope.expanded = true;          
       }
        // $scope.expanded = true;
        $scope.toggle = function() {
            $scope.expanded = !$scope.expanded;
            // console.log('clicked');
            console.log($scope.expanded);
        };
        console.log(DeviceService.getDevice());
    }
}