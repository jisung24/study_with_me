'use strict';
// 입출력 예
// array	    result
// [1, 8, 3]	[8, 1]
// [9, 10, 11, 8]	[11, 2]

let array = [9, 10, 11, 8];
// indexof로 찾아주면 돼!
let maxValue = Math.max(...array);
console.log("max >> ", maxValue);
console.log(); // 가장 큰 수. 
console.log(array.indexOf(Math.max(...array)));

// callback함수로 풀어보자!!! 
let findMaxValue = (array, callback) => {
    let maxValue = Math.max(...array);
    console.log('가장 큰 수', maxValue);
    return callback(array, maxValue);
}

let findIdx = (array, value) => {
    return array.indexOf(value);
}
console.log(`max >> `,findMaxValue([100,500,236, 786, 111], findIdx));