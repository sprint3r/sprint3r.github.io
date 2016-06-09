(function () {
  function teamDirectoryController($http) {
    var self = this;

    self.$onInit = function () {
      $http.get('app/team.json').then(function(result) {
        self.list = result.data;
      });
    };
  }

  angular.module('sprint3rApp')
    .component('teamDirectory', {
      templateUrl: 'app/components/teamDirectoryComponent.html',
      controller: teamDirectoryController,
      bindings: {
        col: '<'
      }
  });
})();
