/// <reference path="C:\Users\ram\documents\visual studio 2015\Projects\Online Store\Online Store\TileView.html" />
/// <reference path="C:\Users\ram\documents\visual studio 2015\Projects\Online Store\Online Store\TileView.html" />
var myHome = angular.module("myHome", []);
myHome.controller("HomePageCtrl", function ($scope, $state) {

    $scope.LogOut = function () {
        $state.go('Logout');
    };

    $scope.groceries = [
            { Name: "Gummies", Price: "55", Rating: "1", Image: "Gummies.jpeg" },
            { Name: "Cookies", Price: "70", Rating: "5", Image: "Cookies.jpeg" },
            { Name: "Sugar Free", Price: "40", Rating: "6", Image: "Sugar Free.jpeg" },
            { Name: "Assorted Biscuits", Price: "40", Rating: "9", Image: "Assorted Biscuits.jpeg" }];

    $scope.movies = [
        { Name: "IceAge", Image: "../html/IceAge.jpeg", Price: "300", Rating: "5", Hall: "" },
        { Name: "Kumfu Panda", Image: "../html/Kumfu Panda.jpeg", Price: "300", Rating: "3", Hall: "" }];

    $scope.search = function (item) {
        if ($scope.searchText == undefined) {
            return true;
        }
        else {
            if (item.Name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
                    item.Price.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
                    item.Rating.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1) {
                return true;
            }
        }

        return false;
    };
});

myHome.directive("tileView", function () {
        return {
            restrict: 'E',
            templateUrl: 'TileView.html',
            scope: {
                itemInfo:'=itemInfo'
            }
        }
    });


