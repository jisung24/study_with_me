"use strict";

let middleOfSpell = (str) => {
  let answer = "";
  if (str.length % 2 === 0) {
    // 문자열의 길이가 짝수라면!
    answer +=
      str[Math.floor(str.length / 2) - 1] + str[Math.floor(str.length / 2)];
  } else {
    answer += str[Math.floor(str.length / 2)];
  }

  return answer;
};
console.log(middleOfSpell("good"));

// 가운데 글자 => Math.floor() : 무조건 내림 (2.8 => 2);
// Math.ceil() : 무조건 올림(3.1 => 4); // 가운데 다음글자..!

console.log(Math.floor("good".length / 2));
console.log(Math.ceil("good".length / 2));
