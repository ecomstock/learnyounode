const fs = require('fs');
const path = require('path');

//learnyounode task 4
let dir = process.argv[2];
let ext = process.argv[3];

fs.readdir(dir, (err, list) => {
	for (i = 0; i < list.length; i++) {
		if (path.extname(list[i]) === `.${ext}`) {
			console.log(list[i]);
		}
	}
})

//learnyounode task 3
// fs.readFile(process.argv[2], (err, rawData) => {
// 	let data = rawData.toString().split("\n");
// 	console.log(data.length - 1);
// })

// learnyounode task 2
// let lineBreaks = fs.readFileSync(process.argv[2]).toString().split("\n");
// console.log(lineBreaks.length - 1);