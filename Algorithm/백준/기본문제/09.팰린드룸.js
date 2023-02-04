"use strict";
// # 1. reverse함수 활용
// # 2. two pointer활용 : 하나는 처음, 하나는 끝, 중간값은 비교하지 말고.. Math.floor(str.length)만큼 비교해서 같으면 ok

/**
 * 팰린드롬이 맞다면 true 아니면 false를 return하는 문제.
 * @param {*} str1 : 입력받은 첫 번째 문자열
 * @returns : 팰린드롬이 맞으면 true 아니면 false
 */
let isSame = (str) => {
  return str.split("").reverse().join("") === str.split("").join("")
    ? true
    : false;
};

// console.log(isSame("level"));
// console.log(isSame("eye"));
// console.log(isSame("hannah"));

let checkPalindrome = (str) => {
  let len = str.length; // 문자열 길이를 받음.
  let middle = Math.floor(len / 2); // 5인경우 2까지..
  let answer = true;
  for (let i = 0; i < middle; i++) {
    // str.charAt(i) !== str.charAt(len - i - 1)
    //   ? (answer = false)
    //   : (answer = true);
    if (str.charAt(i) !== str.charAt(len - i - 1)) {
      answer = false;
      // 2중 반복문 말고 아예 인덱스로 접근하는 것도 좋아..!
    }
  }

  return answer;
};
console.log(checkPalindrome("level"));
console.log(checkPalindrome("leddwl"));
console.log(checkPalindrome("eye"));
console.log(checkPalindrome("hannah"));
