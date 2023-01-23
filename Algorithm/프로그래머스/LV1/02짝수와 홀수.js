'use strict';
// 함수 선언문 : 이전방식  
function hello() {
    return 1;
}

// 함수 표현식 + arrow function
let solution = (n) => n % 2 === 0 ? "Even" : "Odd";
// 변수에 바로 넣어주면 돼! 

console.log(solution(1));
console.log(solution(2));
console.log(solution(109));

// ⭐️ 쓰인 문법 ⭐️
// 1. 삼항연산자 
// 2. 함수 선언문 && 함수 표현식 

let myGrade = 89;
console.log(myGrade > 90 ? "A" : "The Other!");
// 이런식으로 값으로 출력이 됨
// 그 값을 저장할 수 있는 변수를 선언해도 ㄱㅊ음 