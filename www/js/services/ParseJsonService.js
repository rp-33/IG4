angular.module('app')
.factory('ParseJson',[ParseJson])

function ParseJson(){

	var seasons = new Array();

	return{
		decode:function (items){
			for (var propiedad in items) {	
				seasons.push({
					name:propiedad,
					array:items[propiedad]
				})
  
			};
			return seasons;
		}
	}
}