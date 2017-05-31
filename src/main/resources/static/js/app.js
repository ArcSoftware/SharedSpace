(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const app = angular.module('SharedSpace', ['ui.router']);

// require service
const services = [
    require('./services/TaskService'),
];

// loop all services
for (let i = 0; i < services.length; i++) {
    app.factory(services[i].name, services[i].func);
};

// require controllers
const controllers = [
    require('./controllers/TaskController'),
];

// loop all controllers
for (let i = 0; i < controllers.length; i++) {
    app.controller(controllers[i].name, controllers[i].func);
};

// require components
const components = [
    require('./components/task'),
]

// loop all components
for (let i = 0; i < components.length; i++) {
    app.component(components[i].name, components[i].array);
}

app.config( function ($stateProvider, $urlRouterProvider) {

// default path should be to /signin because
// users cannot view tasks unless they are signed in
    $urlRouterProvider.otherwise('/signin');
    
    $stateProvider.state({
        name: "signin",
        url: '/signin',
        component: "signin",
    });

    $stateProvider.state({
        name: 'tasks',
        url: '/tasks',
        component: 'task',
    });

})
},{"./components/task":2,"./controllers/TaskController":3,"./services/TaskService":4}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
module.exports = {
    name: "TaskController",
    func: function ($scope, TaskService) {
        $scope.tasks = TaskService.getTasks();
    }
} 
},{}],4:[function(require,module,exports){
module.exports = {
    name: 'TaskService',
    func: function ($http) {
        let tasks = [];
        // jakes IP
        $http.get('http://jakes-computer:8080/getTasks').then(function (response) {
            for (let i = 0; i < response.data.length; i++) {
                tasks.push({
                    id: response.data[i].id,
                    taskName: response.data[i].taskName,
                    complete: response.data[i].complete,
                    points: response.data[i].points,
                    user: {
                        id: response.data[i].user.id,
                        userName: response.data[i].user.userName,
                        points: response.data[i].user.points,
                    }
                })
            }
        });

        return {
            getTasks: function () {
                return tasks;
            }
        }
    }
}
},{}]},{},[1]);
