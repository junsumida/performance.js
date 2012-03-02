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

module("given [100, 75, 50, 25 ,0]", {setup:function(){
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
	if(typeof jspa.sd(dummy, null, true) === "number"){
		ok(true);
	}else{
		ok(false, "sd method returns not a number. (not NaN)");
	}
	
	var _avg = jspa.average(dummy);
	var _sd  = jspa.sd(dummy, _avg, false);
	if(_sd === 35.35533905932738){
		ok(true);
	}else{
		ok(false, "calculation in the sd method seems wrong: " + _sd);
	}
	
	var _sd = jspa.sd(dummy, null, false);
	if(_sd === 35.35533905932738){
		ok(true);
	}else{
		ok(false, "argument error:" + _sd);
	}

	var _avg = jspa.average(dummy);
	var _sd  = jspa.sd(dummy, _avg, true);
	if(_sd === 30.618621784789728){
		ok(true);
	}else{
		ok(false, "calculation in the sd method seems wrong: " + _sd);
	}
	
	var _sd = jspa.sd(dummy, null, true);
	if(_sd === 30.618621784789728){
		ok(true);
	}else{
		ok(false, "argument error:" + _sd);
	}
});

test("variance", function(){
	var avg = jspa.average(dummy); 
	if(typeof jspa.variance(dummy, avg) === "number"){
		ok(true);
	}else{
		ok(false, "sd method returns not a number. (not NaN)");
	}

	var _avg = jspa.average(dummy);
	var _v  = jspa.variance(dummy, _avg);
	if(_v === 1250){
		ok(true);
	}else{
		ok(false, "calculation in the 'variance' method seems wrong: " + _v);
	}
	
	var _v = jspa.variance(dummy);
	if(_v === 1250){
		ok(true);
	}else{
		ok(false, "argument error:" + _v);
	}
});

test("unbiased variance", function(){
	var avg = jspa.average(dummy); 
	if(typeof jspa.variance(dummy, avg, true) === "number"){
		ok(true);
	}else{
		ok(false, "sd method returns not a number. (not NaN)");
	}

	var _avg = jspa.average(dummy);
	var _v  = jspa.variance(dummy, _avg, true);
	if(_v === 937.5){
		ok(true);
	}else{
		ok(false, "calculation in the 'variance' method seems wrong: " + _v);
	}
	
	var _v = jspa.variance(dummy, null ,true);
	if(_v === 937.5){
		ok(true);
	}else{
		ok(false, "argument error:" + _v);
	}
});

test("confidence interval", function(){
	var avg = jspa.average(dummy);
	var sd  = jspa.sd(dummy, avg, true);
	var min = avg - 2.58 * sd;
	var max = avg + 2.58 * sd;

	var ci = jspa.ci(avg, sd);
	deepEqual(ci.max, max, "max of confidence interval");
	deepEqual(ci.min, min, "min of confidence interval");
});
})();

