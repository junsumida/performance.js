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
			var sd			= this.sd(results, avg);
			var trial   = this.trial(avg, 10000000);
			var ci 			= this.ci(avg, sd);

			var e = document.getElementById("case"+id);
			e.getElementsByTagName("pre")[0].textContent += testCase.toString();
			e.getElementsByClassName("analysis")[0].innerHTML += "<dt>Avg.</dt><dd>"+ avg +"</dd>";
			e.getElementsByClassName("analysis")[0].innerHTML += "<dt>SD</dt><dd>"+ sd +"</dd>";
			e.getElementsByClassName("analysis")[0].innerHTML += "<dt>Unbiased Variance</dt><dd>"+ this.variance(results, avg, true);  +"</dd>";
			e.getElementsByClassName("analysis")[0].innerHTML += "<dt>Confidence Interval (99%)</dt><dd>"+ ci.min +"<=avg<="+ ci.max +"</dd>";
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
		this.variance = function(array, avg, unbiased){
			var v = 0;
			var n   = array.length;	
			if(unbiased){
				n--;
			}
			var avg = avg || this.average(array);
			for(var i=0; i<n; i++){
				v += Math.pow((array[i] - avg), 2);
			}
			return v/n;
		}
		this.sd = function(array, avg, biased){
			var n = array.length;
			var avg = avg || this.average(array);
				
			return Math.sqrt(this.variance(array, avg, biased));
		};
		//confidence interval
		//@TODO not beautiful
		this.ci = function(avg, sd){
			var min = avg - 2.58 * sd;
			var max = avg + 2.58 * sd;

			return {max:max, min:min}; 
		}
		this.trial = function(avg, trial){
			return Math.floor(trial/avg);
		};
	}

	return new Jspa();
})();
