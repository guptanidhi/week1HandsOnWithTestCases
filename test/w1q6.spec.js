let expect = require('chai').expect;
let index = require('../output/w1q6');

describe('Question 6 - Test code for correct output', function(){
	it('Matches the desired output', function(done){
		expect(index).to.deep.equal(99);
		done();
	})
})
