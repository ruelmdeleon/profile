angular.module('profileApp')
    .controller('EducationIndexController', ['$scope', '$http',
        function($scope, $http) {
            $http.get('data/education.json')
                .success(function(data) {
                    $scope.education = data;
                })
        }
    ]);
