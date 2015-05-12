'use strict';

/**
 * @ngdoc overview
 * @name angularSvgCharacterAnimationsApp
 * @description
 * # angularSvgCharacterAnimationsApp
 *
 * Main module of the application.
 */
 angular
 .module('angularSvgCharacterAnimationsApp', [
  'ngAnimate',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'adaptive.speech'
  ])
 .config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});