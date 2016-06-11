describe("Team Directory", function() {
  beforeEach(function() {
    module("sprint3rApp");
    inject(function(_$httpBackend_, $rootScope, $componentController) {
      $httpBackend = _$httpBackend_;
      ctrl = $componentController("teamDirectory", {
        $scope: $rootScope.$new()
      });
    });
  });

  it("should fetch team directory json from static file", function() {
    ctrl.$onInit();
    $httpBackend.expectGET("app/team.json")
      .respond([{"fullname": "Tester", "intro": "This is a test", "image": "images/test.jpg"}]);
    $httpBackend.flush();
  });

});
