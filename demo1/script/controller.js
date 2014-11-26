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
}]);


demo1.controller('fatherController', ['$scope', function($scope) {

    $scope.father = "father scope";

}]);
demo1.controller('son1Controller', ['$scope', function($scope) {
    $scope.son = "i am son1 scope";
}]);
demo1.controller('son2Controller', ['$scope', function($scope) {
    $scope.son = "i am son2 scope";
}]);