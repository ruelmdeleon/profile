describe('skills controller', function() {
    describe('MiscIndexController', function(){
        var scope, ctrl, $httpBackend;
        // Load our app module definition before each test.
        beforeEach(module('profileApp'));
        // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
        // This allows us to inject a service but then attach it to a variable
        // with the same name as the service in order to avoid a name conflict.
        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('data/misc.json').
                respond([{
                  "name": "Awards & Certs",
                  "items": ["2007 Employee of the Year","1999 Fall Presidential Academic Scholarship Recipient","Adobe Certified ColdFusion MX 7 Developer"]
                },{
                  "name": "About Me",
                  "items": ["Warriors Fan","Dog Lover"]
              }]);
            scope = $rootScope.$new();
            ctrl = $controller('MiscIndexController', {$scope: scope});
        }));

        it('should create "miscellaneous lists" model for awards, certs, and about me with 2 entries'), function() {
            expect(scope.lists).toBeUndefined();
            $httpBackend.flush();
            expect(scope.lists.length).toEqual(2);
        }
    });
});
