if(document.textContent != undefined){
	console.log("document.content doesn't exist");
}else{
	console.log("document.content exists.");
	console.log(typeof document.textContent);
}

function performance_check(e, times,func){
	var gap = null;
	for(var k=0; k<times; k++){		
		var begin = new Date();
		func();
		var end = new Date();
		gap += end.getTime() - begin.getTime();
		//e.textContent += end.getTime() - begin.getTime();
		//e.textContent += ",";
	}
	return gap = gap/times;
}

function loop1(){
		for(var n=0; n<1000000; n++){
		}
}
function loop2(){
	var n=0;
	for(n; n<1000000; n++){
	}	
}
function loop3(){
	var n=0;
	for(; n<1000000; n++){
	}
}

window.onload = function(){
	var e = document.getElementById("vd_case1");		
	var result = performance_check(e, 10000,loop1);
	e.innerHTML += '<span style="color:black;font-weight:bold;">avg:</span><span style="color:red;font-weight:bold;">' + result + '</span>';
	var e2 = document.getElementById("vd_case2");
	var result2 = performance_check(e2, 10000,loop2);
	e2.innerHTML += '<span style="color:black;font-weight:bold;">avg:</span><span style="color:red;font-weight:bold;">' + result2 + '</span>';
	var e3 = document.getElementById("vd_case3");
	var result3 = performance_check(e3, 10000,loop3);
	e3.innerHTML += '<span style="color:black;font-weight:bold;">avg:</span><span style="color:red;font-weight:bold;">' + result3 + '</span>';

}
