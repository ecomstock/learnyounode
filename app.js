const fs = require('fs');
const path = require('path');
const mymodule = require('./mymodule');

//learnyounode task 5
let dir1 = process.argv[2];
let ext1 = process.argv[3];
function logList(err, data) {
    if (err){
        console.log(err);
    }
    else {
    	//let loggableData = "";
    	for (i = 0; i < data.length; i++) {
    		console.log(data[i]);
    	}
    }
}
mymodule(dir1, ext1, logList);

//learnyounode task 4
// let dir = process.argv[2];
// let ext = process.argv[3];

// fs.readdir(dir, (err, list) => {
// 	for (i = 0; i < list.length; i++) {
// 		if (path.extname(list[i]) === `.${ext}`) {
// 			console.log(list[i]);
// 		}
// 	}
// })

//learnyounode task 3
// fs.readFile(process.argv[2], (err, rawData) => {
// 	let data = rawData.toString().split("\n");
// 	console.log(data.length - 1);
// })

// learnyounode task 2
// let lineBreaks = fs.readFileSync(process.argv[2]).toString().split("\n");
// console.log(lineBreaks.length - 1);