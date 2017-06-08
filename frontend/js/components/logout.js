module.exports = {
    name: "logout",
    array: {
        templateUrl: "/controllers/logout.html",
//        changing from /src/main/resources/template/signin.html for heroku support
        //          new path is /controllers/signin.html
        controller: "LogoutController"
    }
}