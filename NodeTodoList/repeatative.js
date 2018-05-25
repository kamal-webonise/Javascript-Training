const _ = require('lodash');

module.exports = {

	filterOut: function(task, deleteTask) { // Repeated Code

		return _.filter(task, (name) => 
			name != deleteTask
		);
	}
}