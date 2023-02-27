"use strict";
// 회문 문자열 : 앞에서 읽을 때나, 뒤에서 읽을 때나 같은 문자열!
// 스택이 통하지 않아.. => 짝 맞추는 거랑은 달라..! dddfffddd도 회문인데 stack으로 풀면 탈락이야.

let str = "fffdddfff";
// 가운데 문자!
let before = str.slice(0, Math.floor(str.length / 2) + 1);
let after = str.slice(Math.floor(str.length / 2));

if (before === after.split("").reverse().join("")) {
  console.log("같습니다!!!");
} else {
  console.log("다릅니다!");
}

// 자르는 방법도 있는데.....
// [0] vs length까지 비교해주는 방법도 있어..!
let str2 = "gooog";
let answer = true;
for (let i = 0; i < Math.floor(str2.length); i++) {
  if (str2[i] === str2[str2.length - i - 1]) {
    console.log(str2[i]);
  } else {
    answer = false;
  }
}

console.log(answer);

// 가장 쉬운 방법 : 처음과 reverse가 같으면 돼 그냥...!
// 저 slice 해 줄 필요도 없었어....

let solution = (str) => {
  let answer = "No";
  if (str === str.split("").reverse().join("")) return "Yes";
  // 만약 이 조건이라면 바로 yes를 return하고 아니라면 no를 리턴한다.

  return answer;
};
console.log(solution("gooooooog"));

// reverse는 뒤에서부터 읽어주겠다! 라고 생각하면 편해.
// 원래는 0부터 reverse는 뒤에서 부터!

// 근데 문제가 앞에서부터 읽을 때랑, 뒤에서 읽을 때랑 같다고 하면,
// 원본과 reverse할 때랑 같다는 의미ㅣ!
