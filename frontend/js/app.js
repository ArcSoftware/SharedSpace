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
        })
        
        .state('about', {
            url: '/about',
            component: 'about',
        });
});