angular.module('app')
.controller('CtrlDescarga',['$scope','$http','localStorageService','Config',CtrlDescarga])

function CtrlDescarga($scope,$http,localStorageService,Config){

  $scope.loading = true;
	$scope.result = {
     bool:false
	};

	const config = Config.Headers(localStorageService.get('base64'));

	$http.get("http://globalsens.com:5005/"+localStorageService.get('user')+"/nodes/"+localStorageService.get('root')+"/irrigation", config).then(function (response){
      $scope.result= response.data['last_irrigation'];
      $scope.loading = false;
 

  	},function (){
  	   $scope.loading = false;
       $scope.result.bool=true

  })



}