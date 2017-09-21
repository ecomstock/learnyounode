//const fs = require('fs');
//const path = require('path');
//const mymodule = require('./mymodule');
const http = require('http');
const concatStream = require('concat-stream');
let results = []
let count = 0
 
function printResults () {
  for (var i = 0; i < 3; i++)
    console.log(results[i])
}
 
function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(concatStream(function(data) {
      
      results[index] = data.toString()
      count++
 
      if (count === 3)
        printResults()
    }))
  })
}
 
for (let i = 0; i < 3; i++) {
  httpGet(i)
}


// //learnyounode task 7
// const url = process.argv[2];
// const callback = response => {
// 	response.pipe(concatStream(function(data) {
// 		console.log(data.toString().length);
// 		console.log(data.toString());
// 	}))
// }

// http.get(url, callback)

//learnyounode task 6
// const url = process.argv[2];
// const callback = response => {
// 	response.setEncoding("utf8");
// 	response.on("data", console.log)
// }
// http.get(url, callback)

//learnyounode task 5
// let dir1 = process.argv[2];
// let ext1 = process.argv[3];
// function logList(err, data) {
//     if (err){
//         console.log(err);
//     }
//     else {
//     	for (i = 0; i < data.length; i++) {
//     		console.log(data[i]);
//     	}
//     }
// }
// mymodule(dir1, ext1, logList);

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