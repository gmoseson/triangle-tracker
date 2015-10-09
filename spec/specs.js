describe('isTriangle', function(){
	
	it("if the sum of two sides is less than the third side, not a triangle", function(){
		expect(isTriangle(1,3,8)).to.equal("not a");
	});
	
	it("if all sides are equal returns equilateral", function(){
		expect(isTriangle(1,1,1)).to.equal("equilateral");
	});

	it("if two sides are equal and triangle requirements met, returns isosceles", function(){
		expect(isTriangle(2,2,3)).to.equal("isosceles");
	});

	it("if no two sides are equal and triangle requirements are met, returns scalene", function(){
		expect(isTriangle(4,2,3)).to.equal("scalene");
	});


});