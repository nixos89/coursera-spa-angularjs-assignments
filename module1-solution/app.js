(function() {
  "use strict";

  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope"];

  function LunchCheckController($scope) {
    $scope.message = "";
    $scope.lunchMenu = "";
    $scope.itemArr = [];
    $scope.onCheck = function() {
      $scope.itemArr = $scope.lunchMenu.split(",");     
      if ($scope.lunchMenu == "") {
        console.log("if ($scope.itemArr == undefined)");
        $scope.message = "Please enter data first";
      } else if ($scope.itemArr.length <= 3) {
        console.log("usao sam u if ($scope.itemArr.length <= 3) ");
        $scope.message = "Enjoy!";
      } else if ($scope.itemArr.length > 3) {
        console.log("usao sam u if ($scope.itemArr.length > 3) ");
        $scope.message = "Too much!";
      }
    };
  }
})();
