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
    $httpBackend.expectGET("team.json")
      .respond([{"fullname": "Tester", "intro": "This is a test", "image": "images/test.jpg"}]);
    $httpBackend.flush();
  });

  it("should return arrays of with given number of items from list", function() {
    rawList = [{"value": "1"}, {"value": "2"}, {"value": "3"}, {"value": "4"}, {"value": "5"}, {"value": "6"}, {"value": "7"}];
    result = ctrl.getListInSetOf(rawList, 3);
    expect(result).toEqual(
      [
        [
          {"value": "1"},
          {"value": "2"},
          {"value": "3"},
        ],
        [
          {"value": "4"},
          {"value": "5"},
          {"value": "6"},
        ],
        [
          {"value": "7"},
        ],
      ]
    );
  });

});
