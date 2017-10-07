'use strict'


angular.module('TheNayakNews').controller('filmController', ['$scope', 'webService', function ($scope, webService) {

  var apiKey = "74c20057e29e4641a38b5d00c39bd93f";
  var filmRightUrl = "https://newsapi.org/v1/articles?source=mtv-news&sortBy=top&apiKey=" + apiKey;
  var filmLeftUrl = "https://newsapi.org/v1/articles?source=mtv-news&sortBy=latest&apiKey=" + apiKey;
  initialize();

  function initialize() {
    prepareFilmLeftData(filmLeftUrl);
    prepareFilmRightData(filmRightUrl);
  }

  function prepareFilmLeftData(url) {
    var res = webService.getData(url);
    res.then(function (response) {
        $scope.filmLeftArticles = [];
        if (angular.isDefined(response.data.articles)) {
          angular.forEach(response.data.articles, function (value, key) {
            var filmNews = {
              author: value.author,
              title: value.title,
              description: value.description,
              url: value.url,
              urlToImage: value.urlToImage,
              publishedAt: value.publishedAt
            }
            $scope.filmLeftArticles.push(filmNews);
          })
        }
      },
      function (response) {

      });
  }

  function prepareFilmRightData(url) {
    var res = webService.getData(url);
    res.then(function (response) {
        $scope.filmRightArticles = [];
        if (angular.isDefined(response.data.articles)) {
          angular.forEach(response.data.articles, function (value, key) {
            var filmNews = {
              author: value.author,
              title: value.title,
              description: value.description,
              url: value.url,
              urlToImage: value.urlToImage,
              publishedAt: value.publishedAt
            }
            $scope.filmRightArticles.push(filmNews);
          })
        }
      },
      function (response) {

      });
  }

  $scope.redirectToOriginalSite = function (url) {
    window.open(url);
  }
}]);
