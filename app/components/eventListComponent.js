'use strict';

(function () {
  function eventListController($http) {
    var self = this;
    var access_token = "EAAInY6gi9qYBADLW7IhbeBb44SJX5SSXQ5qL4lPZB5Wo02klo01iCZCEDfZBb0af5VujZCrfaLs8LQGLLfH5RHXfQDpIjdhJHEvo7OgnNDPTJlEe9NTViCRYSWAKAR9ZCBwW82QZAlEAkvMJEGuZAm24ApZAy6M26hO82ZA3bkXZCSmZB16BTs5Srrf";
    var apiEndpoint = "https://graph.facebook.com/v2.6/851344918315730/events?fields=name,start_time,end_time,id,cover,description&access_token=" + access_token;

    self.$onInit = function () {
      $http.get(apiEndpoint, {
      })
        .then(function(result) {
          self.upcomingEvents = result.data.data.filter(isStartTimeAfterNow).map(addDate);
          self.upcomingEvents.sort(compareDate);
      });
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
  }

  angular.module('sprint3rApp')
    .component('eventList', {
      templateUrl: 'components/eventListComponent.html',
      controller: eventListController,
  });
})();
