var app = angular.module('minhaApp', []);

/* Declarando um controller para nossa aplicação */
app.controller('meuController', meuController);

/* Criando a função que será executada pelo controller */
function meuController($scope, $http) {
  /* Declarar aqui as variávies scope */

  $scope.buscarFilmeBD = function () {
    $http.get('./produtosDB.php')
      .success(function (dados) {
        $scope.produtosdb = dados;
        console.log($scope.produtosdb)
      });
  }

  /* Declarar aqui as funções que a aplicação irá executar */

  /* Dentro desta função você poderá chamar outras funções que deseja executar ao carregar o site */
  $scope.carregarDados = function () {
    $scope.buscarFilmeBD();

  };
}
