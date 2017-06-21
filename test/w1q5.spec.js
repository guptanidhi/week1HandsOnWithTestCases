let expect = require('chai').expect;
let index = require('../output/w1q5');

describe('Question 5 - Test code for correct output', function(){
	it('Matches the desired output', function(done){
		expect(index).to.deep.equal(2);
		done();
	})
})
