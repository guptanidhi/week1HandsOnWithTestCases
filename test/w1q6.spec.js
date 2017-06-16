let expect = require('chai').expect;
let index = require('../Solutions/w1q6');

describe('Question 6 - Test code for correct output', function(){
	it('Matches the desired output', function(done){
		expect(index(4,60,7,-13,9)).to.deep.equal(60);
		done();
	})
})
