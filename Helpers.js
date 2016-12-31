
var faker = require('faker')

function Helpers(){
	var _self = this;

	_self.genLocation = function(){
		return {
			"lat": faker.address.latitude(),
			"lng": faker.address.longitude()
		}
	}

	_self.genArrayRef = function(entity){
		var array = []
		for (var id = 1; id < 9; id++) {
			array.push(faker.random.arrayElement(entity).id);
		}
		return array
	}

}


module.exports = function() {
	return new Helpers()
}
