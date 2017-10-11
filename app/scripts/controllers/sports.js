'use strict'


angular.module('TheNayakNews').controller('sportsController', ['$scope', 'webService', '$rootScope', '$state', function ($scope, webService, $rootScope, $state) {

  var apiKey = "74c20057e29e4641a38b5d00c39bd93f";
  var sportsRightUrl = "https://newsapi.org/v1/articles?source=espn-cric-info&sortBy=top&apiKey=" + apiKey;
  var sportsLeftUrl = "https://newsapi.org/v1/articles?source=espn-cric-info&sortBy=latest&apiKey=" + apiKey;
  initialize();

  function initialize() {
    if($rootScope.loggedIn){
    prepareSportsLeftData(sportsLeftUrl);
    prepareSportsRightData(sportsRightUrl);
    }else{
      $state.go('home');
    }
  }

  function prepareSportsLeftData(url) {
    var res = webService.getData(url);
    res.then(function (response) {
        $scope.sportsLeftArticles = [];
        if (angular.isDefined(response.data.articles)) {
          angular.forEach(response.data.articles, function (value, key) {
            var sportsNews = {
              author: value.author,
              title: value.title,
              description: value.description,
              url: value.url,
              urlToImage: value.urlToImage,
              publishedAt: value.publishedAt
            }
            $scope.sportsLeftArticles.push(sportsNews);
          })
        }
      },
      function (response) {

      });
  }

  function prepareSportsRightData(url) {
    var res = webService.getData(url);
    res.then(function (response) {
        $scope.sportsRightArticles = [];
        if (angular.isDefined(response.data.articles)) {
          angular.forEach(response.data.articles, function (value, key) {
            var sportsNews = {
              author: value.author,
              title: value.title,
              description: value.description,
              url: value.url,
              urlToImage: value.urlToImage,
              publishedAt: value.publishedAt
            }
            $scope.sportsRightArticles.push(sportsNews);
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
