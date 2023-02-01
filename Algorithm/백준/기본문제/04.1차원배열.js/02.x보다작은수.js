'use strict';
let input = require('fs').readFileSync('dev/stdin').toString().split('\n');
let [lengthOfArray, compareNumber] = input[0].split(' ').map(Number);
let array = input[1].split(' ').map(Number);

/**
 * 
 * @param {*} arr : 배열
 * @param {*} compareNumber : 비교 수
 * @returns : 배열의 원소 중 비교 수 보다 작은 수들 전부 return
 */
let higherThanCompareNumber = (arr, compareNumber) => {
    let filterNums = arr.filter(ele => ele < compareNumber);
    return filterNums.join(' ');
}
console.log(higherThanCompareNumber(array, compareNumber));


// 함수 이름 vs 함수이름()
// 그 함수를 호출하고 싶을 떄 : 함수이름 
// 그 함수의 return값을 대입해주고 싶을 때 : 함수이름()
