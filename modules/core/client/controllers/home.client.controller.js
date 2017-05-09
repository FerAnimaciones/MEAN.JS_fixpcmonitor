(function () {
  'use strict';

  angular
  .module('core')
  .controller('HomeController', HomeController)
  .controller('nombres', nombres);

  function HomeController() {
    var vm = this;
  }
  function nombres($scope) {
    var vm = this;
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.fullName = function() {
      return $scope.firstName + " " + $scope.lastName;
    };
  }
  angular
  .module('articles')
  .controller('ArticlesListController', ArticlesListController);
  ArticlesListController.$inject = ['ArticlesService'];
  function ArticlesListController(ArticlesService) {
    var vm = this;
    console.log("este no funciona xDDD");
    vm.articles = ArticlesService.query();
  }
  angular
  .module('core')
  .controller('CarouselDemoCtrl', CarouselDemoCtrl);
  function CarouselDemoCtrl($scope) {
    var vm = this;
    $scope.myInterval = 3000;
    $scope.noWrapSlides = false;
    $scope.activeSlide = 0;
    $scope.slides = [
      {
        image: '/modules/core/client/img/banner/foto1.png'
      },
      {
        image: '/modules/core/client/img/banner/foto2.png'
      }
    ];
  }
  console.log("holaaa");
}());
