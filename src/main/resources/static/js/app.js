(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const app = angular.module('SharedSpace', ['ui.router','chart.js']);

// require service
const services = [
    require('./services/TaskService'),
    require('./services/SignInService'),

    require('./services/LeaderBoardService'),

    require('./services/UserService'),

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
    

    require('./controllers/UserController'),

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
    require('./components/about'),
    require('./components/users'),

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

        })

         .state('leaderboard', {
            // name: 'tasks',
            url: '/leaderboard',
            component: 'leaderboard',

        })
        
        .state('about', {
            url: '/about',
            component: 'about',
        })

        .state('users', {
            url: '/users',
            component: 'users',

        });

       
});
},{"./components/about":2,"./components/leaderboard":3,"./components/signin":4,"./components/task":5,"./components/users":6,"./controllers/LeaderBoardController":7,"./controllers/SignInController":8,"./controllers/TaskController":9,"./controllers/UserController":10,"./services/LeaderBoardService":11,"./services/SignInService":12,"./services/TaskService":13,"./services/UserService":14}],2:[function(require,module,exports){
module.exports = {
    name: "about",
    array: {
        templateUrl: "/src/main/resources/templates/about.html",
        
    }
}; 
},{}],3:[function(require,module,exports){
module.exports={
    name: "leaderboard",
    array: {

        templateUrl: "/src/main/resources/templates/leaderboard.html",
        controller: "LeaderBoardController",

    }
}
},{}],4:[function(require,module,exports){
module.exports = {
    name: "signin",
    array: {

        templateUrl: "/src/main/resources/templates/signin.html",
        controller: "SignInController",
    }
}
},{}],5:[function(require,module,exports){
module.exports = {
    name: "allTasks",
    array: {
        templateUrl: "/src/main/resources/templates/allTasks.html",
        controller: "TaskController",
    }
}; 

// need a new component for create new task?
},{}],6:[function(require,module,exports){
module.exports = {
    name: "users",
    array: {
        templateUrl: "/src/main/resources/templates/users.html",
        controller: "UserController",
    }
}; 
},{}],7:[function(require,module,exports){
module.exports={
    name: "LeaderBoardController",
    func: function($scope, LeaderBoardService){
      // $scope.leadUsers= LeaderBoardService.getLeadUsers();
       
        
        //console.log(labels.push);
        $scope.labels = LeaderBoardService.getUserName();
        $scope.series = ['Series A'];
        $scope.data = LeaderBoardService.getPointData();
        console.log($scope.labels);
     
    }
}
},{}],8:[function(require,module,exports){
module.exports={
    name: "SignInController",
    func: function($scope, SignInService){
       
       $scope.go=function(){
           SignInService.showUsers($scope.user_name);
           console.log('$scope.user_name');
       }
    }
}
},{}],9:[function(require,module,exports){
module.exports = {
    name: "TaskController",
    func: function ($scope, TaskService) {
        $scope.tasks = TaskService.getTasks();
        $scope.completed = TaskService.getComplete();
        $scope.markComplete = function(task) {
            // service call here (value is already changed to the right value)
            $scope.tasks = TaskService.completeTask(task);
        }
        // need a create task call here
    }
} 
},{}],10:[function(require,module,exports){
module.exports={
    name: "UserController",
    func: function($scope, UserService){
       // need to make service
       $scope.users = UserService.getUsers();
    }
}
},{}],11:[function(require,module,exports){
module.exports= {
    name: 'LeaderBoardService',
    func: function($http){
        //let ops=$scope;
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
                // ops.options=[{
                    
                //     size:{
                       
                //         height: 200,
                //         width: 600,
                //     }
                // }
                // ];
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
},{}],12:[function(require,module,exports){
module.exports = {
    name: 'SignInService',
    func: function($http) {
        
        return {

            showUsers: function(user_name){
                //return users;
                let u_name = {
                    userName: user_name.toLowerCase(),
                };
                console.log(user_name);
                $http.post('https://sharedspace.herokuapp.com/login', u_name);
               
            }
        }
    }   
}
},{}],13:[function(require,module,exports){
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

        let completed = [];

        // retrieve tasks that have been completed (complete === true)
        $http.get('https://sharedspace.herokuapp.com/getTasks?complete=true').then(function (response) {
            for (let i = 0; i < response.data.length; i++) {

                let name;
                if (response.data[i].user === null ||
                    response.data[i].user === undefined ||
                    response.data[i].user === '') {
                    name = 'Anonymous';
                } else {
                    name = response.data[i].user;
                }

                completed.push({
                    id: response.data[i].id,
                    taskName: response.data[i].taskName,
                    complete: response.data[i].complete,
                    points: response.data[i].points,
                    user: name,
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
                     completed.push(tasks.pop());
                    // console.log(tasks);
                    // console.log(completed);
                })
            },
            getComplete: function () {
                console.log('get complete run');
                return completed;
            },
            createTask(task) {
                $http.post('https://sharedspace.herokuapp.com/addTask', task.id).then(function (response) {
                    // post request to make a new task...
                })
            }
        }
    },

}


},{}],14:[function(require,module,exports){
module.exports = {
  name: 'UserService',
  func: function ($http) {
    let users = [];
    // ask Jake - may want to rename this endpoint?
    $http.get('https://sharedspace.herokuapp.com/userPoints').then(function (response) {
      for (let i = 0; i < response.data.length; i++) {

        users.push({
          id: response.data[i].id,
          userName: response.data[i].userName,
          points: response.data[i].points,
        })
      }
    },
    )
    return {
      getUsers: function () {
        return users;
      }
    }
  }
};
},{}]},{},[1]);
