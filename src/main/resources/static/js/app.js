"use strict";

(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
            }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
                var n = t[o][1][e];return s(n ? n : e);
            }, l, l.exports, e, t, n, r);
        }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
        s(r[o]);
    }return s;
})({ 1: [function (require, module, exports) {
        var app = angular.module('SharedSpace', ['ui.router', 'angularMoment', 'chart.js']);

        // require service
        var services = [require('./services/TaskService'), require('./services/SignInService'), require('./services/LogoutService'), require('./services/LeaderBoardService'), require('./services/UserService')];

        // loop all services
        for (var i = 0; i < services.length; i++) {
            app.factory(services[i].name, services[i].func);
        };

        // require controllers
        var controllers = [require('./controllers/TaskController'), require('./controllers/AllCompleteController'), require('./controllers/NewTaskController'), require('./controllers/SignInController'), require('./controllers/NavController'), require('./controllers/LeaderBoardController'), require('./controllers/UserController'), require('./controllers/AddUserController'), require('./controllers/LoggedInUserController')];

        // loop all controllers
        for (var _i = 0; _i < controllers.length; _i++) {
            app.controller(controllers[_i].name, controllers[_i].func);
        };

        // require components
        var components = [require('./components/task'), require('./components/newTask'), require('./components/allComplete'), require('./components/signin'), require('./components/navbar'), require('./components/leaderboard'), require('./components/about'), require('./components/users'), require('./components/adduser'), require('./components/loggedinuser')];

        // loop all components
        for (var _i2 = 0; _i2 < components.length; _i2++) {
            app.component(components[_i2].name, components[_i2].array);
        }

        app.config(function ($stateProvider, $urlRouterProvider) {

            // default path should be to /signin because
            // users cannot view tasks unless they are signed in

            $urlRouterProvider.otherwise('/signin');

            $stateProvider.state('signin', {
                url: '/signin',
                component: "signin"
            }).state('tasks', {
                url: '/tasks',
                component: 'allTasks',
                onEnter: function onEnter($state, SignInService) {
                    console.log('checking for login');
                    return SignInService.isLoggedIn().then(function (loggedIn) {
                        console.log("Logged in? " + loggedIn);
                        if (!loggedIn) {
                            return $state.target('signin');
                        }
                    });
                }
            }).state('leaderboard', {
                url: '/leaderboard',
                component: 'leaderboard'
            }).state('about', {
                url: '/about',
                component: 'about'
            }).state('allComplete', {
                url: '/allComplete',
                component: 'allComplete'
            }).state('newTask', {
                url: '/newTask',
                component: 'newTask'
            }).state('users', {
                url: '/users',
                component: 'users'
            }).state('adduser', {
                url: '/adduser',
                component: 'adduser'
            }
            //$urlRouterProvider.otherwise('/loggedinuser');  
            // .stateProvider
            ).state('loggedinuser', {
                url: '/loggedinuser',
                component: 'loggedinuser'
            });
        });
    }, { "./components/about": 2, "./components/adduser": 3, "./components/allComplete": 4, "./components/leaderboard": 5, "./components/loggedinuser": 6, "./components/navbar": 7, "./components/newTask": 8, "./components/signin": 9, "./components/task": 10, "./components/users": 11, "./controllers/AddUserController": 12, "./controllers/AllCompleteController": 13, "./controllers/LeaderBoardController": 14, "./controllers/LoggedInUserController": 15, "./controllers/NavController": 16, "./controllers/NewTaskController": 17, "./controllers/SignInController": 18, "./controllers/TaskController": 19, "./controllers/UserController": 20, "./services/LeaderBoardService": 21, "./services/LogoutService": 22, "./services/SignInService": 23, "./services/TaskService": 24, "./services/UserService": 25 }], 2: [function (require, module, exports) {
        module.exports = {
            name: "about",
            array: {
                templateUrl: "/controllers/about.html"
            }
        };
    }, {}], 3: [function (require, module, exports) {
        module.exports = {
            name: "adduser",
            array: {
                templateUrl: "/controllers/adduser.html",
                controller: "AddUserController"
            }
        };
    }, {}], 4: [function (require, module, exports) {
        module.exports = {
            name: "allComplete",
            array: {
                templateUrl: "/controllers/allComplete.html",
                controller: "AllCompleteController"
            }
        };
    }, {}], 5: [function (require, module, exports) {
        module.exports = {
            name: "leaderboard",
            array: {

                templateUrl: "/controllers/leaderboard.html",
                //        changing from /src/main/resources/template/leaderboard.html for heroku support
                //          new path is /controllers/leaderboard.html
                controller: "LeaderBoardController"

            }
        };
    }, {}], 6: [function (require, module, exports) {
        module.exports = {
            name: "loggedinuser",
            array: {
                templateUrl: "/controllers/loggedinuser.html",
                controller: "LoggedInUserController"
            }
        };
    }, {}], 7: [function (require, module, exports) {
        module.exports = {
            name: "navbar",
            array: {
                templateUrl: "/controllers/navbar.html",
                controller: "NavController"
            }
        };
    }, {}], 8: [function (require, module, exports) {
        module.exports = {
            name: "newTask",
            array: {
                templateUrl: "/controllers/newTask.html",
                //        changing from /src/main/resources/template/newTask.html for heroku support
                //          new path is /controllers/newTask.html
                controller: "NewTaskController"
            }
        };
    }, {}], 9: [function (require, module, exports) {
        module.exports = {
            name: "signin",
            array: {
                templateUrl: "/controllers/signin.html",
                //        changing from /src/main/resources/template/signin.html for heroku support
                //          new path is /controllers/signin.html
                controller: "SignInController"
            }
        };
    }, {}], 10: [function (require, module, exports) {
        module.exports = {
            name: "allTasks",
            array: {
                templateUrl: "/controllers/allTasks.html",
                //        changing from /src/main/resources/template/allTasks.html for heroku support
                //          new path is /controllers/allTasks.html
                controller: "TaskController"
            }
        };
    }, {}], 11: [function (require, module, exports) {
        module.exports = {
            name: "users",
            array: {
                templateUrl: "/controllers/users.html",
                //        changing from /src/main/resources/template/users.html for heroku support
                //          new path is /controllers/users.html
                controller: "UserController"
            }
        };
    }, {}], 12: [function (require, module, exports) {
        module.exports = {
            name: "AddUserController",
            func: function func($scope, UserService) {}
        };
    }, {}], 13: [function (require, module, exports) {
        module.exports = {
            name: "AllCompleteController",
            func: function func($scope, TaskService) {
                $scope.tasks = TaskService.getTasks();
            }
        };
    }, {}], 14: [function (require, module, exports) {

        Chart.defaults.global.defaultFontColor = '#fff';
        module.exports = {

            name: "LeaderBoardController",
            func: function func($scope, LeaderBoardService) {
                // $scope.leadUsers= LeaderBoardService.getLeadUsers();

                //console.log(labels.push);
                $scope.labels = LeaderBoardService.getUserName();
                $scope.series = ['Series A'];
                $scope.data = LeaderBoardService.getPointData();
                console.log($scope.labels);
            }
        };
    }, {}], 15: [function (require, module, exports) {
        module.exports = {
            name: "LoggedInUserController",
            func: function func($scope, SignInService) {
                console.log('hi');
                $scope.user = SignInService.getLoggedInUser();
                // $scope.userName='';
            }
        };
    }, {}], 16: [function (require, module, exports) {
        module.exports = {
            name: "NavController",
            func: function func($scope, LogoutService, $state) {
                $scope.logout = function () {
                    LogoutService.logout();
                    $state.go('signin');
                }, $scope.expanded = true;
                $scope.toggle = function () {
                    $scope.expanded = !$scope.expanded;
                    console.log('clicked');
                };
            }
        };
    }, {}], 17: [function (require, module, exports) {
        module.exports = {
            name: "NewTaskController",
            func: function func($scope, TaskService, $state) {

                $scope.submit = function () {
                    TaskService.newTask($scope.taskName, $scope.taskPoints).then(function () {
                        $state.go('tasks');
                    });
                };
            }
        };
    }, {}], 18: [function (require, module, exports) {
        module.exports = {
            name: "SignInController",
            func: function func($scope, SignInService) {

                $scope.go = function () {
                    SignInService.showUsers($scope.user_name);
                    console.log('$scope.user_name');
                }, $scope.loggedIn = function () {
                    if (SignInService.isLoggedIn() === false) {
                        console.log('not logged in');
                        $state.go('signin');
                    } else {
                        console.log('logged in');
                    }
                };
            }
        };
    }, {}], 19: [function (require, module, exports) {
        module.exports = {
            name: "TaskController",
            func: function func($scope, TaskService, SignInService, $interval) {
                // $scope.tasks = TaskService.getTasks();
                TaskService.getTasks().then(function (tasks) {
                    $scope.tasks = tasks;
                });

                $scope.markComplete = function (task) {
                    TaskService.completeTask(task);
                };

                $interval(function () {
                    TaskService.getTasks().then(function (tasks) {
                        $scope.tasks = tasks;
                    });
                }, 1000

                // $scope.intervalFunction();        
                );
            }
        };
    }, {}], 20: [function (require, module, exports) {
        module.exports = {
            name: "UserController",
            func: function func($scope, UserService) {
                // need to make service
                $scope.users = UserService.getUsers();
            }
        };
    }, {}], 21: [function (require, module, exports) {
        module.exports = {
            name: 'LeaderBoardService',
            func: function func($http) {

                var leadUsers = [];
                var userNames = [];
                var pointDatas = [];
                $http.get('https://sharedspace.herokuapp.com/userPoints').then(function (response) {
                    for (var i = 0; i < response.data.length; i++) {
                        leadUsers.push({
                            id: response.data[i].id,
                            userName: response.data[i].userName,
                            points: response.data[i].points
                        });
                        userNames.push(response.data[i].userName);
                        pointDatas.push(response.data[i].points);
                    }
                });
                return {
                    getLeadUsers: function getLeadUsers() {
                        return leadUsers;
                    },

                    getUserName: function getUserName() {
                        return userNames;
                    },

                    getPointData: function getPointData() {

                        return pointDatas;
                    }
                };
            }
        };
    }, {}], 22: [function (require, module, exports) {
        module.exports = {
            name: 'LogoutService',
            func: function func($http) {

                return {
                    logout: function logout() {
                        $http.post('https://sharedspace.herokuapp.com/logout', { withCredentials: true });
                        console.log('sucussful logout');
                    }
                };
            }
        };
    }, {}], 23: [function (require, module, exports) {
        module.exports = {
            name: 'SignInService',
            func: function func($http) {

                return {

                    showUsers: function showUsers(user_name) {
                        //return users;
                        var u_name = {
                            userName: user_name.toLowerCase()
                        };
                        console.log(user_name);
                        $http.post('https://sharedspace.herokuapp.com/login', u_name, { withCredentials: true });
                    },

                    getLoggedInUser: function getLoggedInUser() {
                        var user = {};

                        $http.get('https://sharedspace.herokuapp.com/user', {
                            withCredentials: true,
                            transformResponse: [function (data) {
                                return data;
                            }]
                        }).then(function (response) {
                            user.name = response.data;
                        });

                        return user;
                    },

                    // getUsers:function(user_name){
                    //     $http.get('https://sharedspace.herokuapp.com/login', user_name).then(function(response){
                    //            console.log(u_name);
                    //     });
                    // }


                    isLoggedIn: function isLoggedIn() {
                        return $http.get('https://sharedspace.herokuapp.com/user', {
                            withCredentials: true,
                            transformResponse: [function (data) {
                                return data;
                            }]
                        }).then(function (response) {
                            if (response.data === '') {
                                // check null too
                                console.log('not signed in');
                                return false;
                            } else {
                                console.log('signed in'); // get signed in user
                                return true;
                            }
                        });
                    }

                };
            }
        };
    }, {}], 24: [function (require, module, exports) {
        module.exports = {
            name: 'TaskService',
            func: function func($http) {

                return {
                    getTasks: function getTasks() {
                        // let tasks = [];

                        var get_incomplete = $http.get('https://sharedspace.herokuapp.com/getTasks').then(function (response) {
                            var tasks = [];

                            for (var i = 0; i < response.data.length; i++) {

                                tasks.push({
                                    id: response.data[i].id,
                                    taskName: response.data[i].taskName,
                                    complete: response.data[i].complete,
                                    points: response.data[i].points,
                                    time: response.data[i].time
                                });
                            }

                            return tasks;
                        });

                        // retrieve tasks that have been completed (complete === true)
                        var get_complete = $http.get('https://sharedspace.herokuapp.com/getTasks?complete=true', { withCredentials: true }).then(function (response) {
                            var tasks = [];

                            for (var i = 0; i < response.data.length; i++) {
                                var name = void 0;

                                if (response.data[i].user === null || response.data[i].user === undefined || response.data[i].user === '') {
                                    name = 'You';
                                } else {
                                    name = response.data[i].user;
                                }

                                tasks.push({
                                    id: response.data[i].id,
                                    taskName: response.data[i].taskName,
                                    complete: response.data[i].complete,
                                    points: response.data[i].points,
                                    time: response.data[i].time,
                                    user: name
                                });
                            }

                            return tasks;
                        });

                        /**
                         * Promise.all is a built-in function that returns a promise. This promise
                         * completes when all of the promises we pass in complete.
                         */
                        return Promise.all([get_incomplete, get_complete]).then(function (tasks) {
                            var full = [];

                            // push all incomplete tasks
                            for (var i = 0; i < tasks[0].length; i++) {
                                full.push(tasks[0][i]);
                            }

                            // push all complete tasks
                            for (var _i3 = 0; _i3 < tasks[1].length; _i3++) {
                                full.push(tasks[1][_i3]);
                            }

                            return full;
                        });
                        // return an array
                        // return tasks;
                    },

                    completeTask: function completeTask(task) {
                        console.log(task.id);
                        console.log(task.complete);

                        $http.post('https://sharedspace.herokuapp.com/markComplete', task.id, { withCredentials: true }).then(function (response) {
                            console.log('post request submitted');
                            // completed.push(tasks.pop());
                            task.complete = true;
                            console.log(task.time);
                        });
                    },
                    newTask: function newTask(name, points) {
                        var newTask = {
                            taskName: name.toLowerCase(),
                            points: points
                        };
                        //https://192.168.1.4:8080/addTask
                        return $http.post('https://sharedspace.herokuapp.com/addTask', newTask, { withCredentials: true }).then(function (response) {
                            console.log('new task submitted');
                        });
                    }
                };
            }

        };
    }, {}], 25: [function (require, module, exports) {
        module.exports = {
            name: 'UserService',
            func: function func($http) {

                return {
                    getUsers: function getUsers() {

                        var users = [];
                        $http.get('https://sharedspace.herokuapp.com/userPoints').then(function (response) {
                            for (var i = 0; i < response.data.length; i++) {

                                users.push({
                                    id: response.data[i].id,
                                    userName: response.data[i].userName,
                                    points: response.data[i].points
                                });
                            }
                        });
                        return users;
                    }
                };
            }
        };
    }, {}] }, {}, [1]);