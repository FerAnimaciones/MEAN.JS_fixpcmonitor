(function () {
  'use strict';

  angular
    .module('articles.admin.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('admin.articles', {
        abstract: true,
        url: '/noticias',
        template: '<ui-view/>'
      })
      .state('admin.articles.list', {
        url: '',
        templateUrl: '/modules/articles/client/views/admin/list-articles.client.view.html',
        controller: 'ArticlesAdminListController',
        controllerAs: 'vm',
        data: {
          roles: ['admin']
        }
      })
      .state('admin.articles.create', {
        url: '/crear',
        templateUrl: '/modules/articles/client/views/admin/form-article.client.view.html',
        controller: 'ArticlesAdminController',
        controllerAs: 'vm',
        data: {
          roles: ['admin']
        },
        resolve: {
          articleResolve: newArticle
        }
      })
      .state('admin.articles.edit', {
        url: '/:articleId/editar',
        templateUrl: '/modules/articles/client/views/admin/form-article.client.view.html',
        controller: 'ArticlesAdminController',
        controllerAs: 'vm',
        data: {
          roles: ['admin']
        },
        resolve: {
          articleResolve: getArticle
        }
      });
  }

  getArticle.$inject = ['$stateParams', 'ArticlesService'];

  function getArticle($stateParams, ArticlesService) {
    return ArticlesService.get({
      articleId: $stateParams.articleId
    }).$promise;
  }

  newArticle.$inject = ['ArticlesService'];

  function newArticle(ArticlesService) {
    return new ArticlesService();
  }
}());
