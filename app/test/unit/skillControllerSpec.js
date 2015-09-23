describe('skills controller', function() {
    describe('SkillIndexController', function(){
        var scope, ctrl, $httpBackend;
        // Load our app module definition before each test.
        beforeEach(module('profileApp'));
        // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
        // This allows us to inject a service but then attach it to a variable
        // with the same name as the service in order to avoid a name conflict.
        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('data/skill_list.json').
                respond([{
                  "name": "Front-End",
                  "isHighlight": true
                },{
                  "name": "Full-Stack",
                  "isHighlight": true
                },{
                  "name": "UI/UX",
                  "isHighlight": true
                },{
                  "name": "Product/Market Fit",
                  "isHighlight": true
                },{
                  "name": "HTML, CSS",
                  "years": 10
                },{
                  "name": "Flex",
                  "years": 5
                },{
                  "name": "MS SQL Server",
                  "years": 8
                },{
                  "name": "ColdFusion",
                  "years": 8
                },{
                  "name": "Backbone",
                  "years": 2,
                  "yearsLabel": "Last 2 Years"
                },{
                  "name": "Javascript",
                  "years": 10
                },{
                  "name": "Angular",
                  "isLearning": true
                },{
                  "name": "Ionic",
                  "isLearning": true
                },{
                  "name": "Sass",
                  "isLearning": true
                },{
                  "name": "Parse",
                  "isLearning": true
                }]);

            scope = $rootScope.$new();
            ctrl = $controller('SkillIndexController', {$scope: scope});
        }));

        it('should create "highlights" model from skills with 4 entries'), function() {
            expect(scope.highlights).toBeUndefined();
            $httpBackend.flush();
            expect(scope.highlights.length).toEqual(4);
        }

        it('should create "years" model from skills with years used with 6 entries'), function() {
            expect(scope.years).toBeUndefined();
            $httpBackend.flush();
            expect(scope.years.length).toEqual(6);
        }

        it('should create "learning" model with 4 entries'), function() {
            expect(scope.learning).toBeUndefined();
            $httpBackend.flush();
            expect(scope.learning.length).toEqual(4);
        }
    });
});
