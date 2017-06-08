module.exports = {
    name: "allTasks",
    array: {
        templateUrl: "/controllers/allTasks.html",
//        changing from /src/main/resources/template/allTasks.html for heroku support
        //          new path is /controllers/allTasks.html
        controller: "TaskController"
    }
};