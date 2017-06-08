module.exports = {
    name: "newTask",
    array: {
        templateUrl: "/controllers/newTask.html",
//        changing from /src/main/resources/template/newTask.html for heroku support
        //          new path is /controllers/newTask.html
        controller: "NewTaskController",
    }
}; 