let expect = require('chai').expect;
let index = require('../Solutions/w1q3');

function getDate(){
	var date=new Date();
	var d=date.getDate();
	var m=date.getMonth()+1;
	if(d<10){  
    d='0'+d;  
	}	  
	if(m<10){  
	  m='0'+m;  
	}  
  var y=date.getFullYear();
  return m+"/"+d+"/"+y;
}

describe('Question 3 - Test code for correct output', function(){
	it('Matches the desired output', function(done){
		expect(index()).to.deep.equal(getDate());
		done();
	})
})
