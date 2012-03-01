var dummy;

(function(){
"use strict";

module("method test", {setup:function(){
}});

test("dom", function(){
	if(document.body.textContent){
		ok(true, "textContent method exists.");
	}else{
		ok(false, "textContent method doesn't exist.");
	}

	if(document.body.innerText){
		ok(true, "innerText exits.");
	}else{
		ok(false, "innerText doesn't exist.");
	}
});

module("instanciate jspa", {setup:function(){
}});

test("template test", function(){
	if(typeof jspa.template(1) === "string"){
		ok(true, "jspa.tempate returns 'string'");	
	}else{
		ok(false);
	}
});

module("average test", {setup:function(){
	dummy = [100, 75, 50, 25, 0];	
}});

test("average test", function(){
	if(jspa.average(dummy) === 50){
		ok(true, "avg. of 100, 50, 75, 25, 0 is 50.");
	}else{
		ok(false);
	}
});

test("standard deviation", function(){
	if(typeof jspa.sd(dummy === "number")){
		ok(true);
	}else{
		ok(false, "sd method returns not a number. (not NaN)");
		console.log(jspa.sd(dummy));
	}
	
	var _avg = jspa.average(dummy);
	var _sd  = jspa.sd(dummy, _avg);
	if(_sd === 39.528470752104745){
		ok(true);
	}else{
		ok(false, "calculation in the sd method seems wrong: " + _sd);
	}
	
	var _sd = jspa.sd(dummy);
	if(_sd === 39.528470752104745){
		ok(true);
	}else{
		ok(false, "argument error:" + _sd);
	}
});

})();

