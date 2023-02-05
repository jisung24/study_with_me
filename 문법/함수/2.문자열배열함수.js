"use strict";

// 문자열 함수
// ❗️문자열은 절대 수정할 수 없다❗️

// 1. 같은 지 확인 ===
console.log("hello" === "hello");

// 2. 백틱
// 줄바꿈 가능

// 3. 문자열 길이 : 보통 가입할 때 글자 수 제한..
{
  let str = "jisung4011";
  str.length === 10 && console.log("10이 아닙니다!");
  str.length === 11 || console.log("11글자 미만입니다!");
}

// 4. 특정 위치 접근
// - str[0]
// - chatAt(0)
{
  let str = "hello";
  console.log(str.charAt(3));
}

// 5. 싹 다 소문자 or 대문자로 변환
// - 보통 대 소문자 구분 없을 때 그냥.. 바꿔서 코딩해줌.
{
  let str = "dwdwd";
  let str2 = "password";
  let str3 = "WDWDWDWDW";
  console.log(str.toUpperCase());
  console.log(str2.toUpperCase());
  console.log(str3.toLowerCase());
}

// ❗️6. str.indexOf("찾는문자")
// str에서 찾는 문자의 첫 번째 index를 반환한다..!
{
  let str = "aabffgwdwdaafd";
  // a의 개수 찾기..!
  let value = str.indexOf("a");
  while (value !== -1) {
    // 더 이상 없을 때 까지
    // console.log(value);
    value = str.indexOf("a", value + 1);
    console.log(value);
  }
}

// 7. str.slice(n,m);
{
  let str = "hello";
  console.log(str.slice(1)); // 1부터 끝까지.
  console.log(str.slice(1, 3)); // 1부터 2까지.
  console.log(str.slice(-3, -1)); // 뒤에서 3번째 부터 뒤에서 2번째 까지.
  let copyStr = str.slice(); // 깊은 복사.
  copyStr = copyStr.replace("h", "dwdwd");
  console.log(copyStr);
  console.log(str);
}

// 8. replace : 문자열 수정하고 ❗️바꾼 문자열을 return한다❗️
{
  let str = "hello world";
  str = str.replace("l", "김지성"); // 바꾼 문자열 return한다.
  // 빈문자열 체크...!!
  let str2 = "dwdw dwdw";
  str2 = str2.replace(" ", "띄어쓰기");
  console.log(str2);
}

// 9. trim() : 앞 뒤 공백제거
// 회원가입이나 검색어 입력 할 때 모르고 띄어쓰기 하고 시작했을 때 제거가능.
{
  let str = " dwdwd".trim();
  let str2 = "dwdwd";
  console.log(str.trim() === str2);
}
