describe("Event List", function() {
  beforeEach(function() {
    module("sprint3rApp");
    inject(function(_$httpBackend_, $rootScope, $componentController) {
      $httpBackend = _$httpBackend_;
      ctrl = $componentController("eventList", {
        $scope: $rootScope.$new()
      });
    });
  });

  it("should fetch events from Facebook Graph API", function() {
    ctrl.$onInit();
    $httpBackend.expectGET(ctrl.apiEndpoint)
      .respond({"name": "test"});
    $httpBackend.flush();
  });
});
