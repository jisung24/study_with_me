'use strict';

// 문제 설명
// 문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 
// 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.
// 입출력 예
// my_string	result
// "hi12392"	[1, 2, 2, 3, 9]
// "p2o4i8gj2"	[2, 2, 4, 8]
// "abcde0"	[0]

let my_string = "p2o4i8gj2";
let numberArr = [];

for(let value of my_string) {
    Number.isInteger(Number(value)) === true && numberArr.push(Number(value))
}
console.log(numberArr.sort((a, b) => a - b));

// 0. 정규식으로 숫자 평가하는 방법이 있음. 
// 1. 단축평가!! => 자주 사용되니까 꼭 익숙하게 만들어놓자. 
// 2. Number.isInteger(value) === true && 숫자맞음! 
// 3. sort오름차순 정렬! 