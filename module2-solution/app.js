(function() {
  "use strict";

  angular
    .module("ShoppingListCheckOff", [])
    .controller("ToBuyController", [
      "$scope",
      "ShoppingListCheckOffService",
      function ToBuyController($scope, ShoppingListCheckOffService) {
        this.tbItems = ShoppingListCheckOffService.getToBuyList();

        // removes item from ToBuy list and moves it to Bought list
        $scope.checkOutItem = function(itemIndex) {
          try {
            ShoppingListCheckOffService.checkOutItem(itemIndex);
          } catch (error) {
            this.errorMessage;
          }
        };
      }
    ])
    .controller("AlreadyBoughtController", [
      "$scope",
      "ShoppingListCheckOffService",
      function AlreadyBoughtController($scope, ShoppingListCheckOffService) {
        try {
          this.abItems = ShoppingListCheckOffService.getABoughtList();
        } catch (error) {
          this.errorMessage = "Nothing bought yet.";
        }
      }
    ])
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);


  function ShoppingListCheckOffService() {
    var self = this;
    var toBuyList = [];
    var aBoughtList = [];

    toBuyList = [
      {
        name: "Oranges",
        quantity: 10
      },
      {
        name: "Bannanas",
        quantity: 4
      },
      {
        name: "Mangos",
        quantity: 3
      },
      {
        name: "Avocados",
        quantity: 6
      },
      {
        name: "Pineapple",
        quantity: 7
      }
    ];

    self.checkOutItem = function(index) {
      var item = toBuyList[index];
      aBoughtList.push(item);
      toBuyList.splice(index, 1);
    };

    self.getABoughtList = function() {
      return aBoughtList;
    };

    self.getToBuyList = function() {
      return toBuyList;
    };
  } // ShoppingListCheckOffService
})();
