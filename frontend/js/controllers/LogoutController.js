module.exports = {
    name: "LogoutController",
    func: function ($scope, LogoutService) {
        SignInService.logout();
    }
}