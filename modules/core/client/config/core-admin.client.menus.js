(function () {
  'use strict';

  angular
    .module('core.admin')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    menuService.addMenuItem('topbar', {
      title: 'Administrador',
      state: 'admin',
      type: 'dropdown',
      roles: ['admin']
    });
  }
}());
