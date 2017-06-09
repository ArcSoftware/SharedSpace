(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const app = angular.module('SharedSpace', ['ui.router','chart.js','angularMoment']);

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
    require('./controllers/NewTaskController'),
    require('./controllers/SignInController'),
    require('./controllers/LeaderBoardController'),
    require('./controllers/UserController'),
    require('./controllers/AddUserController'),
    require('./controllers/LoggedInUserController'),

];

// loop all controllers
for (let i = 0; i < controllers.length; i++) {
    app.controller(controllers[i].name, controllers[i].func);
};

// require components
const components = [
    require('./components/task'),
    require('./components/newTask'),
    require('./components/signin'),
    require('./components/leaderboard'),
    require('./components/about'),
    require('./components/users'),
    require('./components/adduser'),
    require('./components/loggedinuser')
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
            url: '/leaderboard',
            component: 'leaderboard',
        })
        
        .state('about', {
            url: '/about',
            component: 'about',
        })

        .state('newTask', {
            url: '/newTask',
            component: 'newTask',
        })

        .state('users', {
            url: '/users',
            component: 'users',
        })

        .state('adduser',{
            url: '/adduser',
            component: 'adduser',
        })

        .state('loggedinuser',{
            url: '/loggedinuser',
            component : 'loggedinuser',
        });

       
});
},{"./components/about":2,"./components/adduser":3,"./components/leaderboard":4,"./components/loggedinuser":5,"./components/newTask":6,"./components/signin":7,"./components/task":8,"./components/users":9,"./controllers/AddUserController":10,"./controllers/LeaderBoardController":11,"./controllers/LoggedInUserController":12,"./controllers/NewTaskController":13,"./controllers/SignInController":14,"./controllers/TaskController":15,"./controllers/UserController":16,"./services/LeaderBoardService":17,"./services/SignInService":18,"./services/TaskService":19,"./services/UserService":20}],2:[function(require,module,exports){
module.exports = {
    name: "about",
    array: {
        templateUrl: "/controllers/about.html",
//        changing from /src/main/resources/templates/about.html for heroku support
        //          new path is /controllers/about.html
        
    }
}; 
},{}],3:[function(require,module,exports){
module.exports={
    name:"adduser",
    array:{
        templateUrl: "/controllers/adduser.html",
        controller : "AddUserController",
    }
};
},{}],4:[function(require,module,exports){
module.exports={
    name: "leaderboard",
    array: {

        templateUrl: "/controllers/leaderboard.html",
//        changing from /src/main/resources/template/leaderboard.html for heroku support
//          new path is /controllers/leaderboard.html
        controller: "LeaderBoardController",

    }
}
},{}],5:[function(require,module,exports){
module.exports={
    name: "loggedinuser",
    array:{
        templateUrl: "/controllers/loggedinuser.html",
        controller: "LoggedInUserController",
    }
}
},{}],6:[function(require,module,exports){
module.exports = {
    name: "newTask",
    array: {
        templateUrl: "/controllers/newTask.html",
//        changing from /src/main/resources/template/newTask.html for heroku support
        //          new path is /controllers/newTask.html
        controller: "NewTaskController",
    }
}; 
},{}],7:[function(require,module,exports){
module.exports = {
    name: "signin",
    array: {
        templateUrl: "/controllers/signin.html",
//        changing from /src/main/resources/template/signin.html for heroku support
        //          new path is /controllers/signin.html
        controller: "SignInController",
    }
}
},{}],8:[function(require,module,exports){
module.exports = {
    name: "allTasks",
    array: {
        templateUrl: "/controllers/allTasks.html",
//        changing from /src/main/resources/template/allTasks.html for heroku support
        //          new path is /controllers/allTasks.html
        controller: "TaskController",
    }
}; 
},{}],9:[function(require,module,exports){
module.exports = {
    name: "users",
    array: {
        templateUrl: "/controllers/users.html",
//        changing from /src/main/resources/template/users.html for heroku support
        //          new path is /controllers/users.html
        controller: "UserController",
    }
}; 
},{}],10:[function(require,module,exports){
module.exports= {
    name: "AddUserController",
    func: function($scope, UserService){

    }
}
},{}],11:[function(require,module,exports){
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
},{}],12:[function(require,module,exports){
module.exports={
    name: "LoggedInUserController",
    func: function ($scope, SignInService){
        console.log('hello');
        $scope.user=SignInService.getLoggedInUser();
    }
}
},{}],13:[function(require,module,exports){
module.exports = {
  name: "NewTaskController",
  func: function ($scope, TaskService, $state) {

    $scope.submit = function () {
      TaskService.newTask($scope.taskName, $scope.taskPoints).then(function() {
        $state.go('tasks');
      });
    }
  }
}
},{}],14:[function(require,module,exports){
module.exports = {
    name: "SignInController",
    func: function ($scope, SignInService) {

        $scope.go = function () {
            SignInService.showUsers($scope.user_name);
            console.log('$scope.user_name');
        }
    }
}
},{}],15:[function(require,module,exports){
module.exports = {
    name: "TaskController",
    func: function ($scope, TaskService, SignInService) {
        $scope.tasks = TaskService.getTasks();
        $scope.markComplete = function(task) {
            TaskService.completeTask(task);
        }
        
    }
} 
},{}],16:[function(require,module,exports){
module.exports={
    name: "UserController",
    func: function($scope, UserService){
       // need to make service
       $scope.users = UserService.getUsers();
    }
}
},{}],17:[function(require,module,exports){
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
},{}],18:[function(require,module,exports){
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
               
            },
            
            getLoggedInUser: function() {
                let user;
                $http.get('https://sharedspace.herokuapp.com/user').then(function(response){
                  user=response.data.userName;
                  console.log(response.data);
                });
                 

         },

            // getUsers:function(user_name){
            //     $http.get('https://sharedspace.herokuapp.com/login', user_name).then(function(response){
            //            console.log(u_name);
            //     });
            // }
        }
    }   
}
},{}],19:[function(require,module,exports){
module.exports = {
    name: 'TaskService',
    func: function ($http) {

        return {
            getTasks: function () {
                let tasks = [];

            $http.get('https://sharedspace.herokuapp.com/getTasks').then(function (response) {
                for (let i = 0; i < response.data.length; i++) {

                    tasks.push({
                        id: response.data[i].id,
                        taskName: response.data[i].taskName,
                        complete: response.data[i].complete,
                        points: response.data[i].points,
                        time: response.data[i].time,
                    })
                }
            });

        // let completed = []; no longer needed

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
                // was completed array
                tasks.push({
                    id: response.data[i].id,
                    taskName: response.data[i].taskName,
                    complete: response.data[i].complete,
                    points: response.data[i].points,
                    time: response.data[i].time,
                    user: name,
                })
            }
        });
                // only first five
                return tasks;
            },
            completeTask(task) {
                console.log(task.id);
                console.log(task.complete);
                
                $http.post('https://sharedspace.herokuapp.com/markComplete', task.id, { withCredentials: true }).then(function (response) {
                    console.log('post request submitted');
                     completed.push(tasks.pop());
                    // console.log(tasks);
                    // console.log(completed);

                    // completed.push(tasks.pop());
                    task.complete = true;


                })
            },
            newTask(name, points) {
                let newTask = {
                    taskName: name.toLowerCase(),
                    points: points
                };
                //https://192.168.1.4:8080/addTask
                return $http.post('https://sharedspace.herokuapp.com/addTask', newTask, { withCredentials: true }).then(function (response) {
                   console.log('new task submitted');
                })
            },
            
        }
    },

}


},{}],20:[function(require,module,exports){
module.exports = {
  name: 'UserService',
  func: function ($http) {
    
    return {
      getUsers: function () {

        let users = [];
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
        return users;
      }
    }
  }
};
},{}]},{},[1]);
