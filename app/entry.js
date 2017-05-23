'use strict';

const cowsay = require('cowsay-browser');
const angular = require('angular');

const demoApp = angular.module('demoApp', []);

demoApp.controller('CowsayController', ['$log', '$scope', CowsayController]);

function CowsayController($log, $scope){
  $log.debug('init CowsayController');

  let cowsayCtrl = $scope.cowsayCtrl = {};
  cowsayCtrl.title = 'Moo';

  cowsayCtrl.updateCow = function(input){
    $log.debug('cowsayCtrl.updateCow()');
    return '\n' + cowsay.say({text:input || 'gimme something to say'});
  };

  cowsayCtrl.helloClick = function(input){
    $log.debug('cowsayCtrl.helloClick');
    $log.log('spammmm clicky');
  };

//controller as syntax
  demoApp.controller('NavController', ['$log', NavController]);
  function NavController($log){
    this.routes = [
      {
        name: 'Home',
        url: '/home'
      },
      {
        name: 'About',
        url: '/about',
      },
    ];
  }
}
