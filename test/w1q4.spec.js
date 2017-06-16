let expect = require('chai').expect;
let index = require('../Solutions/w1q4');

describe('Question 4 - Test code for correct output', function(){
	it('Matches the desired output', function(done){
		expect(index('sachin')).to.deep.equal('Sachin');
		done();
	})
})
