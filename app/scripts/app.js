'use strict';

/**
 * @ngdoc overview
 * @name trainingApp
 * @description
 * # trainingApp
 *
 * Main module of the application.
 */
 angular
 .module('trainingApp', [
  'ngRoute'
  ])
 .config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .when('/', {
    templateUrl: 'views/users.html',
    controller: 'UsersCtrl'
  })
  .when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
}).controller('AboutCtrl', function ($scope) {
  $scope.awesomeThings = [
  'HTML5 Boilerplate',
  'AngularJS',
  'Karma'
  ];
  $scope.testmodel = 'hola';
}).controller('MainCtrl', function ($scope, testFactory, testService) {
  $scope.awesomeThings = [
  'HTML5 Boilerplate',
  'AngularJS',
  'Karma'
  ];
  $scope.nameService = testService.getTest();
  $scope.nameFactory = testFactory.getTest();
}).controller('UsersCtrl', ['$scope', '$http', function($scope, $http){
  $scope.getUsers = function() {
    $http.get('/data/users.json')
      .success( function(data){
        $scope.users = data;
      });
  };
  }
]).service('testService', function(){
  this.getTest = function(){
    return { name: 'luis'}
  };
})
.factory('testFactory', function() {
  return {
    getTest: function() {
      return { name: 'Luis'}
    }
  }
})
.factory('UserDataFactory', function($http){
  return{
    getData: function(){
      return $http.get("http://jsonplaceholder.typicode.com/users");
    }
  }
});
