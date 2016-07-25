(function () {
  function eventListController($http) {
    var self = this;
    var access_token = "EAAInY6gi9qYBANoakXpLf0DP1JA7thf6pyjJu9APzdVbMakpDzAe06ZCNbh7XyERmbsLXJn2cSKZBOwas6414U3T2jX5eA5Y4ZBuDLLqONKQSedbxZChc4Byng7Y4INVO2UYGZAIh3pZAoFy7SlMK9Pzx9dDWLouYZD";
    var apiEndpoint = "https://graph.facebook.com/v2.6/203031806488706/events?fields=name,start_time,end_time,id,cover,description&access_token=" + access_token;

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
