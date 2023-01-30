'use strict';
const input = require('fs').readFileSync('dev/stdin').toString().split(' ')
.map((value) => Number(value))

/**
 * ❗️두 수를 비교해서 크기 결과를 return해주는 함수❗️
 * @param {*} num1 : 첫 번째 비교 수
 * @param {*} num2 : 두 번째 비교 수
 */
let compareTwoNumber = (num1, num2) => {
    // 참고로 함수 표현식은 호이스팅 되지 않아..!
    if(num1 > num2) { // num1이 num2보다 클 때
        return ">"
    }
    else if(num1 === num2){ // 두 수가 같을 때
        return "=="
    }else {
        return "<" // 오른쪽 수가 더 클 때
    }
}

let [num1, num2] = input; // num1 : 비교 첫 번째 수, num2 : 비교 2번쨰 수 
// 구조분해할당 : 배열에서 각 값을 구별해주기 위함이다. 
console.log(compareTwoNumber(num1, num2));




// ❗️배운 점❗️
// let [num3, num4, ...num5] = [5,6,7,8,9,10,11,12,13];
// console.log(num5);
// // spread연산자 => ...num5 (num5는 배열인데 그 배열의 값들을 ...흩 뿌리겠다!);
// // 중요한 점 => num5는 배열이라는 것. 