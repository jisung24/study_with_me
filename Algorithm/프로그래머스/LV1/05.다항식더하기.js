"use strict";
// 변수는 x만 존재
// 공백 x + 로만 존재한다.

let value = "3x + x + 5";
let solution = (polynomial) => {
  let arr = polynomial.split(" + ");
  let number = 0; // 일반 숫자!
  let xNumber = 0; // x계수

  for (let value of arr) {
    //x항부터 계산한다!!!
    if (value.includes("x")) {
      let xArr = value.split("x");
      if (xArr[0] === "") {
        xNumber += 1;
      } else {
        xNumber += Number(xArr[0]);
      }
    } else {
      // 일반 숫자야!
      number += Number(value); // 일반 숫자를 더함.
    }
  }

  // 만약 number === 0
  if (xNumber !== 0 && number !== 0) {
    // 4x + 7 ===> 아 1일경우....
    return xNum === 1 ? `x + ${number}` : `${xNumber}x + ${number}`;
  }
  if (xNumber !== 0 && number === 0) {
    // 4x
    // x
    return xNumber === 1 ? `x` : `${xNumber}x`;
  }

  if (xNumber === 0 && number !== 0) {
    // 0x + 7
    return `${number}`;
  }
  if (xNumber === 0 && number === 0) {
    // 0x + 0
    return "0";
  }
};

console.log(solution("3x + x + 5"));
