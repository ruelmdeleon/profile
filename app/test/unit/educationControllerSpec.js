describe('skills controller', function() {
    describe('EducationIndexController', function(){
        var scope, ctrl, $httpBackend;
        // Load our app module definition before each test.
        beforeEach(module('profileApp'));
        // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
        // This allows us to inject a service but then attach it to a variable
        // with the same name as the service in order to avoid a name conflict.
        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('data/education.json').
                respond([{
                    "program": "MBA - Entrepreneurship",
                    "name": "Keller Graduate School of Management",
                    "location": "Fremont, CA",
                    "year": "Present"
                },{
                    "program": "BS - Comp. Info. Sys.",
                    "name": "DeVry University - Fremont",
                    "location": "Fremont, CA",
                    "year": "2005"
                },{
                    "program": "Code School",
                    "link": "http://www.codeschool.com"
                }]);

            scope = $rootScope.$new();
            ctrl = $controller('EducationIndexController', {$scope: scope});
        }));

        it('should create "education" model with 3 entries'), function() {
            expect(scope.education).toBeUndefined();
            $httpBackend.flush();
            expect(scope.education.length).toEqual(3);
        }
    });
});
