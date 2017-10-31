'use strict';
angular.module('TheNayakNews').config(['$stateProvider', '$urlRouterProvider',  function ($stateProvider, $urlRouterProvider) {
    // For any unmatched url, send to /business
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('home', {//State demonstrating Nested views
            url: "/",
            templateUrl: "views/home.html"
        })
        .state('tech', {//State demonstrating Nested views
            url: "/tech",
            templateUrl: "views/tech.html",
            controller: 'techController'
        })
        .state('film', {//State demonstrating Nested views
            url: "/film",
            templateUrl: "views/film.html",
            controller: 'filmController'
        })
        .state('sports', {//State demonstrating Nested views
            url: "/sports",
            templateUrl: "views/sports.html",
            controller: 'sportsController'
        });

 

}]);
