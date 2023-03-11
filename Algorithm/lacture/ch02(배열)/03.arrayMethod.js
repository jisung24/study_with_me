"use strict";
// 1. 원본을 훼손하는 함수
// -1) push pop , shift, unshift;
{
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  arr.push(13); // O(1);
  arr.pop(); // O(1)
  arr.shift(); // 삭제를 하고 공간커버 O(N)
  arr.unshift(100); // 뒤로 다 밀어주고, 그 안에 넣는다. O(N)
}

// -2) splice : 배열의 모든 위치에서 삭제, 삽입이 가능하다. (❗️역시 원본 훼손한다❗️)
// O(N);
// splice(i, j, "추가할 원소");
// i <= n < j(만큼 삭제한다.)
{
  let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  arr2.splice(0, 2, "index0", "index1");
  console.log(arr2);
}

// 2. 원본을 훼손하지 않는 함수..!

// ⭐️ slice(a, b) ⭐️
// index a번에서 b-1까지 자른 수를 return한다.
{
  let arr = [1, 2, 3, 4, 5];
  console.log(arr.slice(1, 3)); // 1번부터 2번까지.!
  // splice나 slice나 둘 다 앞 <= n < 뒤 범위야 헷갈리지 말자!
  console.log(arr); // 원본 유지!
}

// ⭐️ concat ⭐️
// 배열 합체
{
  let first = [1, 2, 3];
  let last = [4, 5, 6];
  console.log(last.concat(first));
  // 인자로 오는 배열이 뒤로온다.

  // 합체는 spread연산자로도 가능하다..!
  let arr2 = [...first, ...last];
  console.log(arr2.concat(last)); // 합체한 배열에 또 last를 합체..!
  // spread연산자가 훨씬 보기 편하다.
}

// ⭐️ every ⭐️
// - 배열의 모든 원소가 통과인지 알려주는 함수
// ❗️ 모두 ❗️
{
  let even = [2, 4, 6, 8, 10];
  console.log(even.every((ele) => ele % 2 === 0)); // true
  // ele들이 전부 짝수인지 return 한다.!!
  // 모두 김씨인지 확인..!
  let person = ["김ㅌ", "김ㅋ", "김ㅂ", "김ㅎ"];
  // 모두 김씨인지 확인...!
  let isAllKim = person.every((ele) => ele.startsWith("김"));
  console.log(isAllKim);
}

// ⭐️ some ⭐️
// ❗️ 적어도 하나 ❗️
// - 하나라도 true이면 통과..!
{
  let arr = [1, 2, 3, 4, 6, 3];
  // str이 있는지..!
  let regex = /[a-z]/g; // 소문자인지 확인...!
  let isTrue = arr.some((ele) => regex.test(ele)); // 모두 false니까 불통
  // 하나라도 true가 있어야 돼!
  console.log(isTrue); // 하나라도 있으므로 통과!
}

// map,reduce,filter은 뭐..
// reverse : 뒤에서부터 보는걸로 바꿔주기!
// sort매우 중요!
// join : 문자열로 만들어주기...!

// split가지고 놀아보기!
let str = "dwdwdwdwdw";
let length1 = str.length;
for (let value of str) {
  if (value === "d") {
    str = str.replace(value, "");
  }
}
console.log(str);
console.log(length1 - str.length); // d의 개수 5개!
// 어떤 문자가 몇 번 나타났는지..!
// 원본 길이 - replace반복해서..!

// 아니면 배열이면 split으로 한 번에..! 없애줘서 원래 길이 - split을 사용한 길이..
