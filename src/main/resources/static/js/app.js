(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const app = angular.module('SharedSpace', ['ui.router','chart.js']);

// require service
const services = [
    require('./services/TaskService'),
    require('./services/SignInService'),
    require('./services/LeaderBoardService'),
];

// loop all services
for (let i = 0; i < services.length; i++) {
    app.factory(services[i].name, services[i].func);
};

// require controllers
const controllers = [
    require('./controllers/TaskController'),
    require('./controllers/SignInController'),
    require('./controllers/LeaderBoardController'),
    //require('./ChartController'),
];

// loop all controllers
for (let i = 0; i < controllers.length; i++) {
    app.controller(controllers[i].name, controllers[i].func);
};

// require components
const components = [
    require('./components/task'),
    require('./components/signin'),
    require('./components/leaderboard'),
]

// loop all components
for (let i = 0; i < components.length; i++) {
    app.component(components[i].name, components[i].array);
}

// https://scotch.io/tutorials/angular-routing-using-ui-router

app.config( function ($stateProvider, $urlRouterProvider) {

// default path should be to /signin because
// users cannot view tasks unless they are signed in

// $urlRouterProvider.otherwise('/signin');
    
    $stateProvider

        .state('signin', {
            // name: "signin",
            url: '/signin',
            component: "signin"
            // templateUrl: 'templates/signin.html'
        })

        .state('tasks', {
            // name: 'tasks',
            url: '/tasks',
            component: 'allTasks',
            // templateUrl: 'templates/allTasks.html'
        })

         .state('leaderboard', {
            // name: 'tasks',
            url: '/leaderboard',
            component: 'leaderboard',
            // templateUrl: 'templates/allTasks.html'
        });

       
});
},{"./components/leaderboard":2,"./components/signin":3,"./components/task":4,"./controllers/LeaderBoardController":5,"./controllers/SignInController":6,"./controllers/TaskController":7,"./services/LeaderBoardService":8,"./services/SignInService":9,"./services/TaskService":10}],2:[function(require,module,exports){
module.exports={
    name: "leaderboard",
    array: {

        templateUrl: "/src/main/resources/templates/leaderboard.html",
        controller: "LeaderBoardController",

    }
}
},{}],3:[function(require,module,exports){
module.exports={
    name: "signin",
    array: {

        templateUrl: "/src/main/resources/templates/signin.html",
        controller: "SignInController",

        // bindings:{
        //     which: "<",
        // }
    }
}
},{}],4:[function(require,module,exports){
module.exports = {
    name: "allTasks",
    array: {
        templateUrl: "/src/main/resources/templates/allTasks.html",
        controller: "TaskController",
    }
}; 
},{}],5:[function(require,module,exports){
module.exports={
    name: "LeaderBoardController",
    func: function($scope, LeaderBoardService){
       $scope.leadUsers= LeaderBoardService.getLeadUsers();
       
        
        //console.log(labels.push);
        $scope.labels = LeaderBoardService.getUserName();
        $scope.series = ['Series A'];
        $scope.data = LeaderBoardService.getPointData();
        console.log($scope.labels);
        // $scope.data = data;
    //      [25, 59, 80, 81, 56, 55, 40]
    //     // [28, 48, 40, 19, 86, 27, 90]
    //   ];
    }
}
},{}],6:[function(require,module,exports){
module.exports={
    name: "SignInController",
    func: function($scope, SignInService){
       
       $scope.go=function(){
           SignInService.showUsers($scope.user_name);
           console.log('$scope.user_name');
       }
    }
}
},{}],7:[function(require,module,exports){
module.exports = {
    name: "TaskController",
    func: function ($scope, TaskService) {
        $scope.tasks = TaskService.getTasks();
    }
} 
},{}],8:[function(require,module,exports){
module.exports= {
    name: 'LeaderBoardService',
    func: function($http){
        let leadUsers=[];
        let userNames=[];
        let pointDatas=[];
        $http.get('https://sharedspace.herokuapp.com/userPoints').then(function(response){
            for(let i=0; i<response.data.length;i++){
                leadUsers.push({
                    id:response.data[i].id,
                    userName:response.data[i].userName,
                    points:response.data[i].points,
                });
                userNames.push(response.data[i].userName);
                pointDatas.push(response.data[i].points);
            }
        });
        return {
            getLeadUsers:function(){
                return leadUsers;
            },

            getUserName : function() {
                return userNames;
            },

            getPointData : function() {

                return pointDatas;
            }
        }
    }
}
},{}],9:[function(require,module,exports){
module.exports={
    name:'SignInService',
    func: function($http){
       
        return{

            showUsers: function(user_name){
                   console.log('hello');
                //return users;
                let u_name={
                    userName: user_name,
                };
                console.log(user_name);
                $http.post('https://sharedspace.herokuapp.com/login', u_name);

               
            }
        }
    }   
}
},{}],10:[function(require,module,exports){
module.exports = {
    name: 'TaskService',
    func: function ($http) {
        let tasks = [];
        // jakes IP
        $http.get('https://sharedspace.herokuapp.com/getTasks').then(function (response) {
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
