angular.module('app')
.factory('FilterCanvas',[FilterCanvas])

function FilterCanvas(){

	var date = null;

	return{
		labelsLinear:function (label){
			date = label.split(',')[1]
			date = date.split('-');
			return(date[2]+ '-' + date [1]);
			
		},
		labelsBar:function (label){
			date = label.split('-');
			return(date[2]+ '-' + date [1]);
			
		}
	}

}