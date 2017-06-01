const app = angular.module('SharedSpace', ['ui.router']);

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