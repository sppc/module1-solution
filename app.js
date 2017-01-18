(function(){
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', splitString);

splitString.$inject = ['$scope'];
function splitString($scope, stringToSplit, separator) {
    var arrayOfStrings = stringToSplit.split(separator);
    if(arrayOfStrings.length <= 3){
      $scope.name = "Enjoy!";
    }
    else if(arrayOfStrings.length > 3){
      $scope.name = "Too much!";

    }
    else{
      $scope.name = "Please enter data first";
    }

}
})();
