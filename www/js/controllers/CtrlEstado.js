angular.module('app')
.controller('CtrlEstado',['$scope','$http','localStorageService',CtrlEstado])

function CtrlEstado($scope,$http,localStorageService){

$scope.name = localStorageService.get('seasonName'); 
$scope.loading = true;

  $scope.result={
    date:[],
    sondas:[],
    node_t:null,
    floor_t:null,
    bool:false


  }

	var config = {headers:  {
        'Authorization': 'Basic ' +localStorageService.get('base64')+'==',
        'Accept': 'application/json;odata=verbose',
        "X-Testing" : "testing"
    }
  };

	$http.get("http://globalsens.com:5005/"+localStorageService.get('user')+"/nodes/"+localStorageService.get('root')+"/workspace/humidity", config).then(function (response){
    	$scope.result.date = response.data['last_measures']['Ambient temperature'].timestamp;
      $scope.number = response.data['saturation'].result;
      $scope.result.sondas = response.data['reference_probes'];
      $scope.result.node_t = response.data['last_measures']['Node temperature'].value;
      $scope.result.floor_t = response.data['last_measures']['Floor temperature'].value;
      $scope.loading = false;
  	},function (){
  		$scope.loading = false;
      $scope.result.bool=true

  	})
  


}