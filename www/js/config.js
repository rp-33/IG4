angular
.module('app')
.run(run)
.config(['localStorageServiceProvider',configls])


function run ($ionicPlatform,$location,localStorageService) {


  $ionicPlatform.ready(function () {

  	 var closeApp = false;
    $ionicPlatform.registerBackButtonAction(function (){
     
        if (closeApp === true) {
          ionic.Platform.exitApp();
        }else{
          closeApp = true;
          $timeout(function () {
          closeApp = false;
          }, 2000);
          window.plugins.toast.show("Presione nuevamente para salir", "short", "bottom");
        }
    },100)

   
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        
    }

  });
}


function configls(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('ls');

}


	 