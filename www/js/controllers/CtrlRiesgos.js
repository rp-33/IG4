angular.module('app')
.controller('CtrlRiesgos',['$scope','$http','localStorageService','FilterCanvas','Config',CtrlRiesgos])

function CtrlRiesgos($scope,$http,localStorageService,FilterCanvas,Config){


  $scope.loading = true;
  $scope.result = {
    data:[],
    labels:[],
    bool:false
  } 
  var last_7_days = new Array();

	const config = Config.Headers(localStorageService.get('base64'))

	$http.get("http://globalsens.com:5005/"+localStorageService.get('user')+"/nodes/"+localStorageService.get('root')+"/irrigation", config).then(function (response){
      last_7_days = response.data['last_7_days'];
      
      for(var i=0;i<last_7_days.length;i++){
        $scope.result.labels.push(FilterCanvas.labelsBar(last_7_days[i].date));
        $scope.result.data.push(last_7_days[i].value['Riego'].accumulated)
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