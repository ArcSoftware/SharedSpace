module.exports = {
    name: "LogoutController",
    func: function ($scope, LogoutService) {
        LogoutService.logout();
    }
}