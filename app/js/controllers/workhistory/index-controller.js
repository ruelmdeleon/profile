angular.module('profileApp')
    .controller('WorkIndexController', ['$http','$scope','$location',
        function($http,$scope,$location) {
            //work experience
            $http.get('data/work_history.json')
                .success(function(data) {
                    $scope.jobs = data;
                    //convert the tags array into a list
                    $.each($scope.jobs, function(k, v) {
                        v.tags = v.tags.join(" ");
                    });
                })
            //skills
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
            //education
            $http.get('data/education.json')
                .success(function(data) {
                    $scope.education = data;
                })
            $http.get('data/misc.json')
                .success(function(data) {
                    $scope.lists = data;
                })
            $scope.showCompany = function(id) {
                $location.path('/company/'+id);
            }
        }
    ]);
