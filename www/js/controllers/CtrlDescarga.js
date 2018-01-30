angular.module('app')
.controller('CtrlDescarga',['$scope','$http','localStorageService',CtrlDescarga])

function CtrlDescarga($scope,$http,localStorageService){

  $scope.loading = true;
	$scope.result = {
     bool:false
	};

	var config = {headers:  {
        'Authorization': 'Basic ' +localStorageService.get('base64')+'==',
        'Accept': 'application/json;odata=verbose',
        "X-Testing" : "testing"
    	}
  	};

	$http.get("http://globalsens.com:5005/"+localStorageService.get('user')+"/nodes/"+localStorageService.get('root')+"/irrigation", config).then(function (response){
      $scope.result= response.data['last_irrigation'];
      $scope.loading = false;
 

  	},function (){
  	   $scope.loading = false;
       $scope.result.bool=true

  	})



}