module("method test", {setup:function(){
}});

test("textContent", function(){
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
