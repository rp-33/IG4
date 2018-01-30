angular.module('app')
.controller('CtrlSeasons',['$scope','$state','$ionicHistory','localStorageService','ParseJson',CtrlSeasons])

function CtrlSeasons($scope,$state,$ionicHistory,localStorageService,ParseJson){
	
	$scope.items = ParseJson.decode(localStorageService.get('seasons'));
	$scope.id = function (id,name){
		localStorageService.add('seasonName',name)
		localStorageService.add('root',id);
		$ionicHistory.clearCache().then(function(){ $state.go('tab.estado');});
		
	}
	
}