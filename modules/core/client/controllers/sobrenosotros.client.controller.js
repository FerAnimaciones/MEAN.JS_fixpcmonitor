(function () {
  'use strict';

  angular
  .module('core')
  .controller('sobreNosotros', sobreNosotros)
  .controller('nombres', nombres);

  function sobreNosotros() {
    var vm = this;
  }
  function nombres($scope) {
    var vm = this;
    $scope.nombresarreglo=[
    {nombre:"Ana Carolina Mondragon Rangel",foto:"/modules/core/client//img/fotonosotros/caro.png"},
    {nombre:"Fernando Manuel Avila Cataño",foto:"/modules/core/client//img/fotonosotros/fer.png"},
    {nombre:"Winston Ramses Tenatic Bautista Bañuelos",foto:"/modules/core/client//img/fotonosotros/pho.png"}
  ];
 /*     $scope.nombresarreglo=['Ana Carolina Mondragon Rangel','Fernando Manuel Avila Cataño','Winston Ramses Tenatic Bautista Bañuelos'];*/
    /*$scope.integrante1 = "Ana Carolina Mondragon Rangel";
    $scope.integrante12 = "Fernando Manuel Avila Cataño";
*/
  }
}());
