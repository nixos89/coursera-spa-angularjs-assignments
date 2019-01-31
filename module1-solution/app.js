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
      // switch ($scope.itemArr) {
      //   case 0:
      //     $scope.message = "Please enter data first";
      //     break;
      //   case $scope.itemArr.length <= 3:
      //     $scope.message = "Enjoy!";
      //     break;
      //   case $scope.itemArr.length > 3:
      //     $scope.message = "Too much!";
      //     break;
      // }
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
