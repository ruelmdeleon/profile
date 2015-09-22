describe('profileApp controllers', function(){
    beforeEach(module('profileApp.controllers'));
    
    var scope, ctrl1, ctrl2;
    beforeEach(inject(function($controller,$rootScope) {
        scope = $rootScope.$new();
        scope2 = $rootScope.$new();
        ctrl = $controller('WorkIndexController', { $scope: scope});
        ctrl2 = $controller('CompanyViewController', {$scope: scope});
    }))

  it('should create "phones" model with 10 phones', function() {
    var scope = {},
        ctrl = new WorkIndexController(scope);

    expect(scope.jobs.length).toBe(10);
  });

});
