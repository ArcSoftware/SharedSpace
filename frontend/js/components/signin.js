module.exports = {
    name: "signin",
    array: {
        templateUrl: "/controllers/signin.html",
//        changing from /src/main/resources/template/signin.html for heroku support
        //          new path is /controllers/signin.html
        controller: "SignInController",
    }
}