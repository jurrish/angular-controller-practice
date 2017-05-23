'use strict';

const cowsay = require('cowsay-browser');
const angular = require('angular');

const demoApp = angular.module('demoApp', []);

demoApp.controller('CowsayController', ['$log', CowsayController]);

function CowsayController($log){
  $log.debug('init CowsayController');

  this.title = 'Moo';
  this.history = [];

//aka cowsayCtrl.updateCow inside html file
  this.updateCow = function(input){
    $log.debug('cowsayCtrl.updateCow()');
    return '\n' + cowsay.say({text:input || 'gimme something to say'});
  };

  //cowsayCtrl.speak was written inside of the index as a validator for a form.
  this.speak = function(input){
    $log.debug('this.updateCow()');
    //this.spoken will be the value that cowsay.update has currently. it looks like ng-submit="cowsayCtrl.speak(cowsayCtrl.text)" inside the html
    this.spoken = this.updateCow(input);
    //push that value of spoken's state
    this.history.push(this.spoken);
  };


}
//controller as syntax
demoApp.controller('NavController', ['$log', NavController]);
function NavController($log){
  this.routes = [
    {
      //inside of navCtrl there are properties called .url and .name of whatever is being iterated over in ng-repeat (in this case, it's navItem in navCtrl.routes)
      //ie: navItem.name and navItem.url
      name: 'Home',
      url: '/home'
    },
    {
      name: 'About',
      url: '/about',
    },
  ];
}

//the difference between controller as and controller:
//controller as: adds scope to the controller instance
//controller as: "this" is the $scope for the controller. (anything to the left of the dot.)
//controller as: easier to test
//must use "this"


//controller: $scope

//built-in directives


//attribute directives vs element directives
//attribute directives: <something>
//element directives: <li ng-show="some truthy value">
//class directives: <p class="app-wiggle-directive"
