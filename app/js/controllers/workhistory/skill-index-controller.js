angular.module('profileApp')
    .controller('SkillIndexController', ['$scope', '$http', '$element',
        function($scope, $http, $element) {
            $scope.template = "templates/pages/profile/skill_highlights.html";
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
