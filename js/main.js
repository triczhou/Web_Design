// JavaScript Document
var app = angular.module("NYUsdg",[]);
app.controller("SdgController", 
	function ($scope, $http){
		$scope.method = 'GET';
		$scope.url = 'http://websys3.stern.nyu.edu:7003/';
		//$scope.url = 'http://localhost:7003/';
		/*
		$http.get("websys3.stern.nyu.edu:7003/nyusdg/store/")
		.success(function (response){
				$scope.stores = response;
			});
			*/
		$http({method: $scope.method, url: $scope.url + 'store/'}).
			then(function(response) {
				$scope.data = response.data;
			}, function(response) {
				alert(response.data);;
		});
		$scope.remove = function(id){
			//alert(id);
			$http.delete($scope.url +'store/'+ id).
			then(function (response){
				if(response.data == '1'){alert('Please login');}
				else{$scope.data = response.data;}
				}, function (response){
					alert(response.data);;
			});
		};
		$scope.addNew = function(){
        	var tmp = $scope.fields;
        	$http.post($scope.url+'store/', tmp).
			then(function(response) {
				if(response.data == '1'){alert('Please login');}
				else{$scope.data = response.data;}
				}, function(response) {
					alert('Unknown Error');;
			});
    	};
    	$scope.login = function(){
        	var tmp = $scope.info;
        	$http.post($scope.url+'login/', tmp).
			then(function(response) {
				alert(response.data);
				}, function(response) {
					alert('Unknown Error');
			});
    	};
	});