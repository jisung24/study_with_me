'use strict';
let input = require('fs').readFileSync('dev/stdin').toString().split('\n');
let tc = Number(input[0]);
let array = input[1].split(' ').map(Number);
let compareNumber = Number(input[2]);

let higherThanCompareNumberArr = (arr, compareNumber) => {
    let filterNumbers = arr.filter(ele => ele === compareNumber);
    return filterNumbers.length;
}
console.log(higherThanCompareNumberArr(array, compareNumber));