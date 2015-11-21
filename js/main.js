// JavaScript Document
var app = angular.module("NYUsdg",[]);
app.controller("SdgController", 
	function ($scope, $http){
		$scope.method = 'GET';
		$scope.url = 'http://websys3.stern.nyu.edu:7003/nyusdg/store/';
		/*
		$http.get("websys3.stern.nyu.edu:7003/nyusdg/store/")
		.success(function (response){
				$scope.stores = response;
			});
			*/
		
		
		$http({method: $scope.method, url: $scope.url}).
			then(function(response) {
				$scope.data = response.data;
			}, function(response) {
				alert("Request failed");
		});
		$scope.remove = function(id){
			//alert(id);
			$http.delete($scope.url + id).
			then(function (response){
					$scope.data = response.data;
				}, function (response){
					alert("Delete failed");
			});
		};
		$scope.addNew = function(){
        	var tmp = $scope.fields;
        	$http.post($scope.url, tmp).
			then(function(response) {
					$scope.data = response.data;
				}, function(response) {
					alert("AddNew failed");
			});
    	};
	});