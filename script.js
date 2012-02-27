(function(){
	"use strict";
	var testCases = [
		function(){
			for(var n=0; n<10000000; n++){
			}
		},
		function(){
			var n=0;
			for(n; n<10000000; n++){
			}	
		},
		function(){
			var n=0;
			for(; n<10000000; n++){
			}	
		}	
	];

	var testCases2 = [
		function(){
			for(var i=0; i<array.length; i++){
			}	
		},
		function(){
			var len = array.length;
			for(var i=0; i<len; i++){
			}
		}
	];

	var array = [];
	for(var i=0; i<100000; i++){
		array.push(i);
	}

	document.getElementById("demo").onclick = function(){
		for(var i=0; i<testCases.length; i++){
			jspa.test("test case " + i, testCases[i]);
		}
	};
})();
