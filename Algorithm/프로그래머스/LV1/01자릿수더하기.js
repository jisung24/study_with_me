'use strict';
// 각 자릿수를 더한다.
// => 몇 자리인지 정해지지 않음. 

// 문제 설명
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

let solution = (n) => {
    let arr = n.toString().split('')
    .map((value) => +value)
    .reduce((acc, cur) => acc + cur);

    return arr;
}

console.log(solution(123456));


// 복습내용 
// reduce함수 => 배열 전체를 하나의 값으로 만들어주는 함수 => 즉, 하나의 값이 배열이 될 수도 있고,
// 객체가 될 수 있고, 하나의 숫자가 될 수 있음. 

let arr = [1,2,3,4,5];
let sumOfArr = arr.reduce((acc, cur) => {

    // 결국엔 return을 계속 해준다는건 acc의 값을 설정한다는건데, 
    // return이 없으면 acc의 값을 만들어갈 수 없다.!!!! 
    // 계속 acc가 undefined가 떠... 

    // ❗️acc의 초기값을 준다면, 
    // acc >> 초기값 
    // cur >> 배열 idx 0 번째 값부터 시작! 

    // ❗️acc의 초기값을 생략한다면, 
    // acc > idx[0]
    // cur > idx[1], idx[2] 이런식으로!
    return acc + cur; // 1 + 2
});