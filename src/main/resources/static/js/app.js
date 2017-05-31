(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const app = angular.module('SharedSpace', ['ui.router']);

// require service
const services = [
    require('./services/TaskService'),
    require('./services/SignInService'),
];

// loop all services
for (let i = 0; i < services.length; i++) {
    app.factory(services[i].name, services[i].func);
};

// require controllers
const controllers = [
    require('./controllers/TaskController'),
    require('./controllers/SignInController'),
];

// loop all controllers
for (let i = 0; i < controllers.length; i++) {
    app.controller(controllers[i].name, controllers[i].func);
};

// require components
const components = [
    require('./components/task'),
    require('./components/signin'),
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
        component: "signin"
    });

    $stateProvider.state({
        name: 'tasks',
        url: '/tasks',
        component: 'task',
    });
})
},{"./components/signin":2,"./components/task":3,"./controllers/SignInController":4,"./controllers/TaskController":5,"./services/SignInService":6,"./services/TaskService":7}],2:[function(require,module,exports){
module.exports={
    name:"signin",
    array: {
        temlateUrl:"../../../src/main/resources/templates/signin.html",
        controller:"SignInController",
        // bindings:{
        //     which: "<",
        // }
    }
}
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
module.exports={
    name: "SignInController",
    func: function($scope, SignInService){
       
       $scope.go=function(){
           SignInService.showUser($scope.user_name);
           console.log('hello');
       }
    }
}
},{}],5:[function(require,module,exports){
module.exports = {
    name: "TaskController",
    func: function ($scope, TaskService) {
        $scope.tasks = TaskService.getTasks();
    }
} 
},{}],6:[function(require,module,exports){
module.exports={
    name:'SignInService',
    func: function($http){
       
        return{

            showUsers: function(user_name){
                   console.log(hello);
                //return users;
                let u_name={
                    username: user_name,
                };
                $http.post('http://192.168.1.4:8080/login?userName=' +user_name);

               
            }
        }
    }
}
},{}],7:[function(require,module,exports){
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
