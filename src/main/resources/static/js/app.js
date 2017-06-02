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
    
    $stateProvider
        .state('signin', {
            url: '/signin',
            component: "signin"
        })

        .state('tasks', {
            url: '/tasks',
            component: 'allTasks',
        });
});
},{"./components/signin":2,"./components/task":3,"./controllers/SignInController":4,"./controllers/TaskController":5,"./services/SignInService":6,"./services/TaskService":7}],2:[function(require,module,exports){
module.exports = {
    name: "signin",
    array: {

        templateUrl: "/src/main/resources/templates/signin.html",
        controller: "SignInController",
    }
}
},{}],3:[function(require,module,exports){
module.exports = {
    name: "allTasks",
    array: {
        templateUrl: "/src/main/resources/templates/allTasks.html",
        controller: "TaskController",
    }
}; 
},{}],4:[function(require,module,exports){
module.exports={
    name: "SignInController",
    func: function($scope, SignInService){
       
       $scope.go=function(){
           SignInService.showUsers($scope.user_name);
           console.log('$scope.user_name');
       }
    }
}
},{}],5:[function(require,module,exports){
module.exports = {
    name: "TaskController",
    func: function ($scope, TaskService) {
        $scope.tasks = TaskService.getTasks();
        $scope.markComplete = function(task) {
            // service call here (value is already changed to the right value)
            $scope.tasks = TaskService.completeTask(task);
        }
    }
} 
},{}],6:[function(require,module,exports){
module.exports = {
    name: 'SignInService',
    func: function($http) {
        
        return {

            showUsers: function(user_name){
                //return users;
                let u_name = {
                    userName: user_name,
                };
                console.log(user_name);
                $http.post('https://sharedspace.herokuapp.com/login', u_name);
               
            }
        }
    }   
}
},{}],7:[function(require,module,exports){
module.exports = {
    name: 'TaskService',
    func: function ($http) {
        let tasks = [];

        $http.get('https://sharedspace.herokuapp.com/getTasks').then(function (response) {
            for (let i = 0; i < response.data.length; i++) {

                tasks.push({
                    id: response.data[i].id,
                    taskName: response.data[i].taskName,
                    complete: response.data[i].complete,
                    points: response.data[i].points,
                    // n.b. we don't care about WHO makes the task - just who completes it
                    // user: {
                    //     id: response.data[i].user.id,
                    //     userName: response.data[i].user.userName,
                    //     points: response.data[i].user.points,
                    // }
                })
            }
        });

        return {
            getTasks: function () {
                return tasks;
            },
            completeTask(task) {
                $http.post('https://sharedspace.herokuapp.com/markComplete', task.id).then(function (response) {
                    console.log('post request submitted');
                })
            }
        }
    },

}


},{}]},{},[1]);
