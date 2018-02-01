angular.module('app')
.directive('rpProgress',function (){
	return function (scope,element,attrs){
		attrs.$observe('rpProgress',function (value){
			var result = value * 1.8;
			element.css({
				"transform": "rotateZ("+result+"deg)",
				"-moz-transform": "rotateZ("+result+"deg)",
				"-webkit-transform": "rotateZ("+result+"deg)",
				"-o-transform": "rotateZ("+result+"deg)",

			})
		})
	}
})