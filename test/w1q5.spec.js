let expect = require('chai').expect;
let index = require('../Solutions/w1q5');

describe('Question 5 - Test code for correct output', function(){
	it('Matches the desired output', function(done){
		expect(index('Farook', 'o')).to.deep.equal(2);
		done();
	})
})
