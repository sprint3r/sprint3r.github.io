(function () {
  function teamDirectoryController($http) {
    var self = this;

    self.$onInit = function () {
      $http.get('team.json').then(function(result) {
        self.list = result.data;
      });
    };
  }

  angular.module('sprint3rApp')
    .component('teamDirectory', {
      templateUrl: 'components/teamDirectoryComponent.html',
      controller: teamDirectoryController,
      bindings: {
        col: '<'
      }
  });
})();
