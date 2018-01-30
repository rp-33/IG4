angular.module('app')
.controller('CtrlRiesgos',['$scope','$http','localStorageService','FilterCanvas',CtrlRiesgos])

function CtrlRiesgos($scope,$http,localStorageService,FilterCanvas){


  $scope.loading = true;
  $scope.result = {
    data:[],
    labels:[],
    bool:false
  } 
  var last_7_days = new Array();
	var config = {headers:  {
        'Authorization': 'Basic ' +localStorageService.get('base64')+'==',
        'Accept': 'application/json;odata=verbose',
        "X-Testing" : "testing"
    	}
  	};
	$http.get("http://globalsens.com:5005/"+localStorageService.get('user')+"/nodes/"+localStorageService.get('root')+"/irrigation", config).then(function (response){
      last_7_days = response.data['last_7_days'];
      
      for(var i=0;i<last_7_days.length;i++){
        $scope.result.labels.push(FilterCanvas.labelsBar(last_7_days[i].date))
        $scope.result.data.push(last_7_days[i].value['P1'].accumulated)
      }
      $scope.loading = false;

  	},function (){
  	$scope.loading = false;
    $scope.result.bool=true

  	})


	$scope.labels = $scope.result.labels;
  $scope.data = $scope.result.data;
  $scope.series = ['Series A'];


}