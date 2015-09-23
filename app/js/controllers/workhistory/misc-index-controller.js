angular.module('profileApp')
    .controller('MiscIndexController', ['$scope', '$http',
        function($scope, $http) {
            $scope.template = "templates/pages/profile/skill_misc.html";
            $http.get('data/misc.json')
                .success(function(data) {
                    $scope.lists = data;
                })
        }
    ]);
