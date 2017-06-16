let expect = require('chai').expect;
let index = require('../Solutions/w1q1');

describe('Question 1 - Test code for correct output', function(){
	it('Matches the desired output', function(done){
		var string = "My name is Sachin. I work in NIIT and my Designation is Reporting Manager";
		expect(index('Sachin', 'NIIT', 'Reporting Manager')).to.deep.equal(string);
		done();
	})
})
