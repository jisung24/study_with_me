'use strict';
const input = require('fs').readFileSync('dev/stdin').toString().split('\n');
const lengthOfArray = Number(input[0]);
const array = input[1].split(' ').map(Number);

/**
 * 배열을 하나 받아서 최소, 최댓값을 return해주는 함수
 * @param {*} array : 배열
 * @returns : 최소, 최댓값을 배열로 만들고 최종적으론 문자열로 만들어줌.
 */
let printMinMaxNumber = (array) => {
    let minValue = Math.min(...array);
    let maxValue = Math.max(...array);

    return [minValue, maxValue].join(' ');
}

console.log(printMinMaxNumber(array));