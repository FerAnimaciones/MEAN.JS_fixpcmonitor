(function () {
  'use strict';

  angular
    .module('core')
    .run(menuConfig);
  /*
  angular
  .module('app', ['core','articles'])
*/
  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    menuService.addMenu('account', {
      roles: ['user']
    });

    menuService.addMenuItem('account', {
      title: '',
      state: 'settings',
      type: 'dropdown',
      roles: ['user']
    });

    menuService.addSubMenuItem('account', 'settings', {
      title: 'Editar perfil',
      state: 'settings.profile'
    });

    menuService.addSubMenuItem('account', 'settings', {
      title: 'Editar imagen de perfil',
      state: 'settings.picture'
    });

    menuService.addSubMenuItem('account', 'settings', {
      title: 'Cambiar contraseña',
      state: 'settings.password'
    });

  }
}());
