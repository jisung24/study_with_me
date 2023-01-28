'use strict';
// numbers	result
// [1, 2, -3, 4, -5]	15
// [0, -31, 24, 10, 1, 9]	240
// [10, 20, 30, 5, 5, 20, 5]	600

// 싹 다 돌면서... 모든 수를 다 곱한 배열을 만든 후 그 배열의 최댓값을 적어준다.. 
// 이게 최선 맞나..?
let number = [1,2,-3,4,-5];
let allTypes = []; 

for(let i = 0; i < number.length; i++) {
    for(let j = 0; j < number.length; j++) {
        number[i] !== number[j] && allTypes.push(number[i] * number[j])
    }
}
console.log(Math.max(...allTypes));