describe("Event List", function() {
  var $httpBackend, $http, $q, $scope;

  beforeEach(function() {
    module("sprint3rApp");
    inject(function(_$httpBackend_, $rootScope, $componentController, _$http_, _$q_) {
      $httpBackend = _$httpBackend_;
      $http = _$http_;
      $q = _$q_;
      $scope = $rootScope.$new();
      ctrl = $componentController("eventList", {
        $scope: $scope
      });
    });
  });

  function getFacebookEvents() {
    return {
      "data": [
        {
          "name": "Passed",
          "start_time": "2016-05-01T09:00:00+0700",
          "end_time": "2016-05-01T10:00:00+0700",
          "id": 851344918315730,
          "cover": {
            "offset_x": 0,
            "offset_y": 0,
            "source": "",
          },
        },
        {
          "name": "A",
          "start_time": "2020-05-30T09:00:00+0700",
          "end_time": "2020-05-30T10:00:00+0700",
          "id": 851344918315731,
          "cover": {
            "offset_x": 0,
            "offset_y": 0,
            "source": "",
          },
        }
      ]
    };
  }


  function fetchAPIWithData(data) {
    spyOn($http, "get").and.returnValue($q.resolve(
      {
        "data": data
      }
    ));
    ctrl.$onInit();
    $scope.$apply();
  }

  it("should fetch events from Facebook Graph API", function() {
    $httpBackend.expectGET(ctrl.apiEndpoint).respond(getFacebookEvents());
    ctrl.$onInit();
    $httpBackend.flush();
  });

  it("should get events and found only upcoming one (exclude passed events)", function() {
    fetchAPIWithData(getFacebookEvents());
    expect(ctrl.upcomingEvents.length).toEqual(1);
  });

  it("should have upcoming events with date equals to 2020-05-30T09:00:00+0700", function() {
    fetchAPIWithData(getFacebookEvents());
    expect(ctrl.upcomingEvents[0].date).toEqual(new Date("2020-05-30T09:00:00+0700"));
  });

  it("should have upcoming events with date equals to 2020-12-01T09:00:00+0700", function() {
    var data = getFacebookEvents();
    data.data[1].start_time = "2020-12-01T09:00:00+0700";
    fetchAPIWithData(data);
    expect(ctrl.upcomingEvents[0].date).toEqual(new Date("2020-12-01T09:00:00+0700"));
  });

  it("should sort upcoming events by their start_time ascendingly", function() {
    var data = getFacebookEvents();
    var extendedData = [
      {
        "name": "B",
        "start_time": "2020-05-12T09:00:00+0700",
        "end_time": "2020-05-12T10:00:00+0700",
        "id": 851344918315729,
        "cover": {
          "offset_x": 0,
          "offset_y": 0,
          "source": "",
        },
      },
      {
        "name": "C",
        "start_time": "2020-05-01T09:00:00+0700",
        "end_time": "2020-05-01T10:00:00+0700",
        "id": 851344918315728,
        "cover": {
          "offset_x": 0,
          "offset_y": 0,
          "source": "",
        },
      }
    ];
    data.data.push(extendedData[0], extendedData[1]);

    fetchAPIWithData(data);
    var namesInOrder = [];
    namesInOrder.push(ctrl.upcomingEvents[0].name);
    namesInOrder.push(ctrl.upcomingEvents[1].name);
    namesInOrder.push(ctrl.upcomingEvents[2].name);

    expect(namesInOrder).toEqual(["C", "B", "A"]);
  });
});
