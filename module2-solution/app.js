(function() {
  "use strict";

  var app = angular.module("ShoppingListCheckOff", []);
  app.controller("ToBuyController", ToBuyController);
  app.controller("AlreadyBoughtController", AlreadyBoughtController);
  app.service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  ToBuyController.$inject["ToBuyController", "$scope"];
  AlreadyBoughtController.$inject["AlreadyBoughtController", "$scope"];

  function ToBuyController(ShoppingListCheckOffService) {
    var tbItems = [];
    $scope.tbItems = ShoppingListCheckOffService.setToBuyList();

    // removes item from ToBuy list and moves it to Bought list
    // $scope.checkOut = 
  }

  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var abItems = [];
    
    // MUST implement $watch service to be aware of which items 
    // have been moved FROM toBuyList TO alreadyBoughtList


  }

  function ShoppingListCheckOffService() {
    var self = this;
    var toBuyList = [];
    var boughtList = [];
    var item = { item: something, quantity: 0};

    self.setToBuyList = function(){
      self.toBuyList = {
          item = {
            name: Oranges,
            quantity: 10
          },
          item = {
            name: Bananas,
            quantity: 4
          },
          item = {
            name: Mangos,
            quantity: 3
          },
          item = {
            name: Avocados,
            quantity: 6
          },
          item = {
            name: Pineapple,
            quantity: 7
          }
      };
    }// setToBuyList    

    self.checkOutItem = function(index) {
      var item = self.toBuyList.indexOf(index);            
      self.toBuyList.splice(index, 1);
      self.boughtList.push(item);    
    }


  }// ShoppingListCheckOffService

})();
