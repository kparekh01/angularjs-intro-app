(function() {
  "use strict";

  angular.module("app").controller("test_ctlr", function($scope){
    $scope.message = "Hello!";
    window.$scope = $scope;
  });
})();
