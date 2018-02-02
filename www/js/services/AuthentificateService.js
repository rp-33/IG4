angular.module('app')
.factory('Authentificate',['$http','$state','Base64','localStorageService','Config',Authentificate])

function Authentificate($http,$state,Base64,localStorageService,Config){

	return{

		login:function (user){
      user.button=true;
      const code64 = Base64.encode(user.name.toLowerCase()+':'+user.password);
      localStorageService.add('base64',code64);
      localStorageService.add('user',user.name.toLowerCase());

  			$http.get("http://globalsens.com:5005/"+user.name.toLowerCase()+"/nodes", Config.Headers(code64)).then(function (response){
          localStorageService.add('seasons',response.data);
          user.button=false;
    			$state.go('seasons');
  			},function (){
          user.button=false;
  				 window.plugins.toast.show("Usuario no existe", "long", "bottom");
  			})



		}

	}
}