let fs = require('fs');

//learnyounode task 3
fs.readFile(process.argv[2], (err, rawData) => {
	let data = rawData.toString().split("\n");
	console.log(data.length - 1);
})


// learnyounode task 2
// let lineBreaks = fs.readFileSync(process.argv[2]).toString().split("\n");
// console.log(lineBreaks.length - 1);