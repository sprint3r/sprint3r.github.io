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
    };

    function isStartTimeAfterNow(event) {
      return moment(event.start_time) >= moment();
    }


    function addDate(event) {
      event.date = moment(event.start_time);
      return event;
    }

    function compareDate(eventA, eventB) {
      return eventA.date - eventB.date;
    }
  }

  angular.module('sprint3rApp')
    .component('eventList', {
      templateUrl: 'app/components/eventListComponent.html',
      controller: eventListController,
  });
})();
