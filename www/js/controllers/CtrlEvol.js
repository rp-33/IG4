angular.module('app')
.controller('CtrlEvol',['$scope','$http','localStorageService','FilterCanvas','Config',CtrlEvol])

function CtrlEvol($scope,$http,localStorageService,FilterCanvas,Config){

	var datos = new Array();
  $scope.color=["#45b7cd"];
	$scope.loading=true;
	$scope.result={
		labels:[],
		data:[],
		trend:null,
		bool:false,
    sondas:null
	};

	const config = Config.Headers(localStorageService.get('base64'))

	$http.get("http://globalsens.com:5005/"+localStorageService.get('user')+"/nodes/"+localStorageService.get('root')+"/workspace/evolution", config).then(function (response){
    	datos = response.data['last_7_days_saturation'];
    	$scope.result.trend = response.data['trend'].trend_points;
    	$scope.result.bool = true;
    	$scope.loading = false;

    	for(var i=0;i<datos.length;i++){
			 $scope.result.labels.unshift(FilterCanvas.labelsLinear(datos[i].date));
			 $scope.result.data.unshift(datos[i].value.result);
		  }

  	},function (){
  		$scope.result.bool = false;
  		$scope.loading = false;
  })

    $http.get("http://globalsens.com:5005/"+localStorageService.get('user')+"/nodes/"+localStorageService.get('root')+"/irrigation/recommendation", config).then(function (response){
      $scope.result.sondas = response.data.response;

    })


	$scope.labels = $scope.result.labels;
	$scope.series = ['Series A'];
	$scope.data = $scope.result.data;

  	$scope.datasetOverride = [{ yAxisID: 'y-axis-1' }];
  	$scope.options = {
    	scales: {
    	 yAxes: [
        	{
          	id: 'y-axis-1',
          	type: 'linear',
          	display: true,
          	position: 'left'
        	}
      	 ]
   		}
  	};
  	


}