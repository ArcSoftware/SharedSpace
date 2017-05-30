(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
console.log('js linked');

const app = angular.module('SharedSpace', ['ui.router']);

// require service
const services = [
    require('./services/service'),
];

// loop all services
for (let i = 0; i < services.length; i++) {
    app.factory(services[i].name, services[i].func);
};

// require controllers
const controllers = [
    require('./controllers/controller'),
];

// loop all controllers
for (let i = 0; i < controllers.length; i++) {
    app.controller(controllers[i].name, controllers[i].func);
};

// require components
const components = [
    require('./components/component'),
]

// loop all components
for (let i = 0; i < components.length; i++) {
    app.component(components[i].name, components[i].array);
}

// app.config( function ($stateProvider) {
    
//     $stateProvider.state({
//         name: "front_page",
//         url: '/front_page',
//         component: "opening"
//     });

//     $stateProvider.state({
//         name: 'results',
//         url: '/results/:searchstring',
//         component: 'results',
//     });
//      $stateProvider.state({
//         name: 'add',
//         url: '/add',
//         component: 'add',
//     });

//         $stateProvider.state({
//         name: 'cart',
//         url: '/cart',
//         component: 'cart',
//     });

// })
},{"./components/component":2,"./controllers/controller":3,"./services/service":4}],2:[function(require,module,exports){
module.exports = {
    // name: "add",
    // array: {
    //     templateUrl: "templates/add.html",
    //     controller: "AddItemController",
    //     bindings: {
    //         which: "<",
    //     }
    // }
}; 
},{}],3:[function(require,module,exports){
module.exports = {
    // name: "AddItemController",
    // func: function ($scope, AddService) {
    //     $scope.items = AddService.getAddItems();

    //     $scope.add=function(){
    //         AddService.addItem($scope.name,$scope.image,$scope.brand,$scope.price)
    //     }
    // }
}; 
},{}],4:[function(require,module,exports){
module.exports={
    // name: 'AddService',
    // func: function ($http){
    //     let items=[];
    //     let carts=[];

    //     return {
    //          addItem:function(item){
                  
    //          },

    //         getCarts: function(){
    //             return carts;
    //         },
    //         getAddItems(){
    //             return items;
    //         }
    //     }
    // }
};

},{}]},{},[1]);
