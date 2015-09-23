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
            
            $scope.showCompany = function(id) {
                $location.path('/company/'+id);
            }
        }
    ]);
