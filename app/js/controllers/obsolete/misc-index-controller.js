angular.module('profileApp')
    .controller('MiscellaneousIndexController', ['$scope', '$http',
        function($scope, $http) {
            $http.get('data/misc.json')
                .success(function(data) {
                    $scope.lists = data;
                })
        }
    ]);
