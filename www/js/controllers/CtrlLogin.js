angular.module('app')
.controller('CtrlLogin',['$scope','Authentificate',CtrlLogin])

function CtrlLogin ($scope,Authentificate){

	$scope.login = function (user){
		Authentificate.login(user);
	}

}