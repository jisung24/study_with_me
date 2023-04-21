"use strict";
// 숫자로 바꾸기
// Number
// - 단 정수와 실수 NaN으로 나뉜다 => 셋 다 숫자임!
console.log(Number("1414")); // 1414
console.log(Number("안녕!")); // NaN
console.log(Number("1414.2222")); // 1414.2222

// 숫자 중 정수로 바꿔주고 싶다면?
// - parseInt : 문자열이나, 소수가 들어오면 내림해서 정수부분만!
console.log(parseInt(2.444)); // 2
console.log(parseInt("dwdaw")); // NaN
console.log(parseInt(2)); // 2

// 숫자 중 실수로 바꿔주고 싶다면?
console.log(parseFloat(2.444));
console.log(parseInt(parseFloat("2.44"))); // 2

// 정수인지 확인하고 싶다면?
console.log(Number.isInteger("dawdaw"));
console.log(Number.isInteger(2));
console.log(Number.isInteger("44")); // 문자열!

// 그럼 문자열 속에서 숫자인지 확인해주고 싶으면?
let s = "123daa";
console.log(!!Number(s[1]));
console.log(!!Number(s[4]));
