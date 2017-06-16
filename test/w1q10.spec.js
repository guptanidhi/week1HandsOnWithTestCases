let expect = require('chai').expect;
let index = require('../Solutions/w1q10');

function fact(){
	var fact = 1;
	var factorialArray = [];
	for(var j=11;j<=20;j++){
		for(var i=1; i<=j; i++){
			fact= fact*i;
		}
		factorialArray.push(fact);
	}
	return factorialArray.join("");
}
describe('Question 10 - Test code for correct output', function(){
	it('Matches the desired output', function(done){
		expect(index()).to.equal(fact());
		done();
	})
})
