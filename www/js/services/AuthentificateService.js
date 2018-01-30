angular.module('app')
.factory('Authentificate',['$http','$state','Base64','localStorageService',Authentificate])

function Authentificate($http,$state,Base64,localStorageService){

	return{

		login:function (user){
      user.button=true;
      const code64 = Base64.encode(user.name.toLowerCase()+':'+user.password)
      localStorageService.add('base64',code64);
      localStorageService.add('user',user.name.toLowerCase());


  		var config = {headers:  {
        	'Authorization': 'Basic ' +code64+'==',
        	'Accept': 'application/json;odata=verbose',
        	"X-Testing" : "testing"
    		}
  		};
  			$http.get("http://globalsens.com:5005/"+user.name.toLowerCase()+"/nodes", config).then(function (response){
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