angular.module('profileApp')
    .controller('SkillIndexController', ['$scope', '$http',
        function($scope, $http) {
            $http.get('data/skill_list.json')
                .success(function(data) {
                    //Where I Shine
                    $scope.highlights = data.filter(function(value) {
                        return value.isHighlight
                    });
                    //What I know
                    $scope.years = data.filter(function(value) {
                        return value.years;
                    });
                    //What I am Learning
                    $scope.learning = data.filter(function(value) {
                        return value.isLearning;
                    });
                })
        }
    ]);
