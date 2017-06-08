const app = angular.module('SharedSpace', ['ui.router','angularMoment']);

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
        });

       
});