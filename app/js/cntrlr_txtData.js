'use strict';

angular.module('txtData', [])
.controller('pageTxtCtrl', function($scope, $http) {
    $http.get("model/data.json")
    .then(function(response) {
        $scope.jsonData = response.data.pageTextData;
    });
});