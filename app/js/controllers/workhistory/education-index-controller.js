angular.module('profileApp')
    .controller('EducationIndexController', ['$scope', '$http',
        function($scope, $http) {
            $scope.template = "templates/pages/profile/skill_education.html";
            $http.get('data/education.json')
                .success(function(data) {
                    $scope.education = data;
                })
        }
    ]);
