const fs = require('fs');
const path = require('path');

module.exports = function(directory, extension, callback) {
	
	let list = [];

	fs.readdir(directory, (err, data) => {
		if (err) {
			return callback(err);
		}
		for (i = 0; i < data.length; i++) {
			if (path.extname(data[i]) === `.${extension}`) {
				list.push(data[i]);
			}
		}
		return callback(null, list);
	})

}


