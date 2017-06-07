module.exports = {
    name: "users",
    array: {
        templateUrl: "/controllers/users.html",
//        changing from /src/main/resources/template/users.html for heroku support
        //          new path is /controllers/users.html
        controller: "UserController",
    }
}; 