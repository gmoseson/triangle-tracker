var isTriangle = function(a,b,c){
		if((a + b < c) || (a + c < b) || (b + c < a)) {
			return "not a";
		} else if((a===b) && (b===c)) {
			return "equilateral";
		} else if((a===b)|| (a===c) || (c===b)) {
			return "isosceles";
		} else if((a!==b) && (b!==c) && (c!==a)) {
			return "scalene";
		}
};

$(document).ready(function() {
	$("form#triangle-tracker").submit(function(event){
		
		var sideA = parseInt($("input#a").val());
		var sideB = parseInt($("input#b").val());
		var sideC = parseInt($("input#c").val());

		var triangle = isTriangle(sideA,sideB,sideC);
		
		$(".triangle").text(triangle);
		$(".a").text("");
		if (triangle === "isosceles" || triangle === "equilateral"){
			$(".a").text("an");
		} else if (triangle === "scalene"){
			$(".a").text("a");
		}

		$("#result").show();
		event.preventDefault();
	});
});