/**
 * demo1 Module
 *
 * Description
 */
var demo1 = angular.module('demo1', []);



demo1.controller('HelloController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.hi = {
        text: "hello world"
    };
    $rootScope.hello = "hi";
    $scope.hello = function() {
        alert("hi helloController");
    }
    $rootScope.roothello = function(sayhello) {
        alert('rootscope say:' + sayhello);
    }
}]);


demo1.controller('fatherController', ['$scope', function($scope) {

    $scope.father = "father scope";
    $scope.hello = function() {
        alert("father");
    }
}]);
demo1.controller('son1Controller', ['$scope', function($scope) {
    $scope.son = "i am son1 scope";
    $scope.hello = function() {
        alert("son1");
    }
}]);
demo1.controller('son2Controller', ['$scope', function($scope) {
    $scope.son = "i am son2 scope";
    $scope.hello = function() {
        alert("son2");
    }
}]);