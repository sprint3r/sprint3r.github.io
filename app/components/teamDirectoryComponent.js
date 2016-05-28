(function () {
  function teamDirectoryController($http) {
    var self = this;

    self.$onInit = function () {
      $http.get('team.json').then(function(result) {
        self.list = self.getListInSetOf(result.data, self.col);
      });
    };

    self.getListInSetOf = function(originalList, number) {
      var result = [];
      for (var i = 0; i < originalList.length / number; i ++) {
        var start = i * number;
        result.push(originalList.slice(start, start + number));
      }
      return result;
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
