(function () {
  'use strict';

  angular
  .module('core')
  .controller('Comentario', ComentarioController);
/*
  ComentarioController.$inject = ['$scope', '$state', '$window', 'comentariosResolve', 'Notification'];

  function ComentarioController($scope, $state, $window, article, Notification) {
    var vm = this;

    vm.comentario = comentario;
    vm.form = {};
    vm.remove = remove;
    vm.save = save;
    // Remove existing Article
    function remove() {
      if ($window.confirm('Deseas borrar la noticia?')) {
        vm.comentario.$remove(function() {
          $state.go('home');
          Notification.success({ message: '<i class="glyphicon glyphicon-ok"></i> La noticia se borro correctamente!' });
        });
      }
    }

    function save(isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.comentarioForm');
        return false;
      }
      // Create a new article, or update the current instance
      vm.article.createOrUpdate()
      .then(successCallback)
      .catch(errorCallback);
      function successCallback(res) {
        $state.go('home'); // should we send the User to the list or the updated Article's view?
        Notification.success({ message: '<i class="glyphicon glyphicon-ok"></i> La noticia se creo correctamente!' });
      }
      function errorCallback(res) {
        Notification.error({ message: res.data.message, title: '<i class="glyphicon glyphicon-remove"></i> Upss hubo un problema al guardar!' });
      }
    }
  }*/
}());
