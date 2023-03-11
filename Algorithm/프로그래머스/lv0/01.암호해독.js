"use strict";

function solution(cipher, code) {
  let answer = "";

  for (let i = code - 1; i <= cipher.length; i += code) {
    answer += cipher[i];
  }
  return answer;
}

// tip
// 반복문을 code만큼 띄어주고 반복해서,
// 그 영어들을 answer에 +해준다!
