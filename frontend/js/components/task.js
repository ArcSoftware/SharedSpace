module.exports = {
    name: "allTasks",
    array: {
        templateUrl: "templates/allTasks.html",
        controller: "TaskController",
        bindings: {
            // $ctrl.which
            which: "<",
        }
    }
}; 