if(document.textContent != undefined){
	console.log("document.content doesn't exist");
}else{
	console.log("document.content exists.");
	console.log(typeof document.textContent);
}

var jspa = (function(){
	function Jspa(testcases){
		var tests = [];
		this.test = function(testName, testCase){	
			tests.push(testName);
			var id = tests.length;
			document.body.innerHTML += this.template(id);
			var e = document.getElementById("case"+id);
			e.getElementsByTagName("pre")[0].textContent += testCase.toString();
			var csv = e.getElementsByClassName("csv")[0];
			var avg = this.analysis(csv, 100, testCase);
			e.getElementsByClassName("analysis")[0].innerHTML += "<dt>Avg.</dt><dd>"+ avg +"</dd>"
		}
		this.template = function(id){
			var tmp = "<section id='case" + id +"' class='jspa'>"+
									"<h1>case"+id+"</h1>"+
									"<pre></pre>"+
									"<textarea class='csv'></textarea>"+
									"<p class='analysis'>"+
										"<dl>"+
										"</dl>"+
									"</p>"+
								"</section>";
			return tmp;
		}
		this.analysis = function(e, times, func){
			var gap = null;
			for(var k=0; k<times; k++){		
				var begin = new Date();
				func();
				var end = new Date();
				gap += end.getTime() - begin.getTime();
				e.textContent += end.getTime() - begin.getTime();
				e.textContent += ",";
			}
			return gap = gap/times;		
		}
	}

	return new Jspa();
})(this);

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

window.onload = function(){
	jspa.test("test name", testCases[0]);
	jspa.test("test2", testCases[1]);
}
