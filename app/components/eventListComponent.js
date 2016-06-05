(function () {
  function eventListController($http) {
    var self = this;
    var access_token = "EAAInY6gi9qYBAK5CVMBQOHI5bN36eOvnK19SwPKFfXIy9InRZACTmy12UOGa4FNKvhCU7WuDBwQDeqlRSS1PqNOqPV6Ken2Xv1rBy83Mcy7n1Jow6oIYUKoAjLHQrL1KCjfOaTuhZCbs05Eu2R";
    var apiEndpoint = "https://graph.facebook.com/v2.6/851344918315730/events?fields=name,start_time,end_time,id,cover,description&access_token=" + access_token;

    self.$onInit = function () {
      $http.get(apiEndpoint, {
      })
        .then(function(result) {
          self.upcomingEvents = result.data.data.filter(isStartTimeAfterNow).map(addDate);
          self.upcomingEvents.sort(compareDate);
          self.upcomingEvents = self.upcomingEvents.slice(0, 5);
      });

      // self.upcomingEvents = getFacebookEvents().data.filter(isStartTimeAfterNow).map(addDate);
    };

    function isStartTimeAfterNow(event) {
      return new Date(event.start_time) >= new Date();
    }


    function addDate(event) {
      event.date = new Date(event.start_time);
      return event;
    }

    function compareDate(eventA, eventB) {
      return eventA.date - eventB.date;
    }

    function getFacebookEvents() {
      return {
        "data": [
          {
            "name": "Passed",
            "start_time": "2017-05-01T09:00:00+0700",
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
          },
          {
            "name": "A",
            "start_time": "2020-05-30T09:00:00+0700",
            "end_time": "2020-05-30T10:00:00+0700",
            "id": 851344918315731,
            "description": "sfk;jsadklfjaskl;dfjlk;asdjfkl;sajdfcnjsadiocfmpjsiofnwoipevfuoweunriovpeunvfpioeufmoeufpcmerjcfio pnerhvpfmoercjniopmrcfoermcfieorpmj",
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
  }

  angular.module('sprint3rApp')
    .component('eventList', {
      templateUrl: 'components/eventListComponent.html',
      controller: eventListController,
  });
})();
