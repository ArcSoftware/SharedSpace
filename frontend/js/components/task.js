module.exports = {
    name: "allTasks",
    array: {
        templateUrl: "../../../src/main/resources/templates/allTasks.html",
        controller: "TaskController",
        bindings: {
            // $ctrl.which
            which: "<",
        }
    }
}; 