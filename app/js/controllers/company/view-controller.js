angular.module('profileApp')
    .controller('CompanyViewController', ['$http','$scope','$routeParams',
        function($http, $scope, $routeParams) {
            $http.get('data/employer/' + $routeParams.id + '.json')
              .success(function(data) {
                $scope.company = data;
              })
            }
        ]);
