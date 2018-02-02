angular.module('app')
.service('Config',Config)

function Config(){
	return{
		Headers:function (code64){
			const config = {headers:  {
        		'Authorization': 'Basic ' +code64+'==',
        		'Accept': 'application/json;odata=verbose',
        		"X-Testing" : "testing"
    			}
  			}

  			return config
		}
		
  		
	}

}