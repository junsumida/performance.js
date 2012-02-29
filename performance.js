var jspa = (function(){
	"use strict";

	function Jspa(testcases){
		var tests = [];
		this.test = function(testName, testCase){
			tests.push(testName);
			var id = tests.length;
			document.body.getElementsByClassName("container")[0].innerHTML += this.template(id);

			var results = this.analysis(100, testCase);
			var avg     = this.average(results);
			var sd			= this.sd(results);
			var trial   = this.trial(avg, 10000000);

			var e = document.getElementById("case"+id);
			e.getElementsByTagName("pre")[0].textContent += testCase.toString();
			e.getElementsByClassName("analysis")[0].innerHTML += "<dt>Avg.</dt><dd>"+ avg +"</dd>";
			e.getElementsByClassName("analysis")[0].innerHTML += "<dt>SD</dt><dd>"+ sd +"</dd>";
			e.getElementsByClassName("analysis")[0].innerHTML += "<dt>trials/msec</dt><dd>"+ trial +"</dd>";
			e.getElementsByTagName("textarea")[0].innerHTML    = results.toString();
		};
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
		};
		this.analysis = function(times, func){
			var gap = null;
			var results = [];
			for(var i=0; i<times; i++){		
				var begin = new Date();
				func();
				var end = new Date();
				results[i] = end.getTime() - begin.getTime();
			}
			return results;
		};
		this.average = function(array){
			var n = array.length;
			var sum = 0;
			for(var i=0; i<n; i++){
				sum += array[i];
			}
			return sum/n;
		};
		this.sd = function(array){
			var sd = 0;
			var n = array.length;
			var avg = this.average(array);
			for(var i=0; i<n; i++){
				sd += Math.pow((array[i] - avg), 2);
			}
			sd = Math.sqrt(sd/(n-1));
			return sd;
		};
		this.trial = function(avg, trial){
			return Math.floor(trial/avg);
		};
	}

	return new Jspa();
})();
