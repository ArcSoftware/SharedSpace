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

app.config( function ($stateProvider) {
    
    $stateProvider.state({
        name: "signin",
        url: '/signin',
        component: "signin"
    });

    $stateProvider.state({
        name: 'results',
        url: '/results/:searchstring',
        component: 'results',
    });

})