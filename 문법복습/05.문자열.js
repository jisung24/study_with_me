"use strict";
// ⭐️ 1. length : 문자열 길이 ⭐️
// ⭐️ 2. toUpperCase(), toLowerCase() : 전체를 대문자, 소문자로 만들어서 return해줌. ⭐️
{
  let str = "dAwDDWDaw";
  console.log(str.toUpperCase()); // 전체 소문자
  console.log(str.toLowerCase()); // 전체 대문자
  // 일부만 바꾸기
}

// ⭐️ 3. indexOf : 문자열 있는 지! => 선형탐색 => 나중가면 이분탐색을 배움. ⭐️
// ⭐️ 4. slice : 문자열 일부 잘라서 반환 ⭐️
{
  let str = "DwadadadacqAC";
  let sliceStr = str.slice(1, 5).toUpperCase(); // index 1번부터 4번까지
  console.log(sliceStr);
}
// ⭐️ 5. trim : 문자열 양쪽 공백 없애줌 ⭐️
// ⭐️ 6. repeat : 문자열을 반복해서 return해줌! ⭐️
{
  let str = "aaa";
  let repeatStr = str.repeat(5); // 반복한 글자 return해줌!
  console.log(repeatStr);

  let nStr = "abcd";
  let arr = nStr.split("").map((v) => v.repeat(5));
  console.log(arr);
}
// ⭐️ 7. str.codePointAt(문자열 index)⭐️
// ⭐️ 8. String.fromCodePoint(97) = 'a' ⭐️
{
  let str = "abcdef";
  let arr = str.split("").map((v) => v.codePointAt(0)); // 각 아스키코드 숫자로 바꿔서 return함!

  let numArr = [93, 94, 95, 96, 97, 98];
  let ascii = numArr.map((v) => String.fromCodePoint(v));
  console.log(ascii);
}

// ⭐️ includes : 있으면 true 아니면 false ⭐️
{
  let str = "dadwa aa is a";
  console.log(str.includes("is") ? "있다" : "없다"); // 있다
}

// ⭐️ replace : 맨 앞에 있는 거 하나를 뒤에 파라미터 문자로 대체함 ⭐️
{
  let str = "dddaav".replace("a", " "); // 가장 앞에 있는 a를 " "로 바꿔서 return함
  console.log(str); // ddd av
}
// ⭐️ replace : 전체를 대체함 ⭐️
{
  let str = "Aaa bbxq qwqr";
  let replaceAll = str.replaceAll("a", "O");
  console.log(replaceAll);
}

// 실습 뒤에 n글자! slice(-n); // 뒤 n번째부터 끝까지..!
{
  let S = "ProgrammerS123";
  console.log(S.slice(-11));
  console.log(S.slice(-10, -8)); // 뒤에서 10번째 글자부터 9번째 글자까지..! => 뒤는 무조건 뒤보다 앞에까지 출력하는거야!
  let partS = S.slice(-4); // 뒤에서 4번째부터 끝까지..!
  console.log(partS); // S123
}

{
  let arr = [
    ".xx...xx.",
    "x..x.x..x",
    "x...x...x",
    ".x.....x.",
    "..x...x..",
    "...x.x...",
    "....x....",
  ];

  // 2개씩 어떻게 늘리지...?
  // 1차원 원소 각각의 원소들을 k개씩 늘리는거야....! =>
  let arr2 = [1, 2, 3, 4];
  // 1,1,2,2,3,3,4,4로 만들기...!
  let num1 = 1;
  let num2 = num1.toString().split("");
  let num3 = num2.push(1);
  console.log(num2);

  let str = ".xx...xx.";
  let multi = str + " " + str;
  console.log(multi.split(" "));
}

{
  // 2중 map 쓰는 거 진짜... 어렵네...!
  let arr = ["da", "dm", "qg", "jgv", "pm"];
  // 2개씩 늘리고 각 문자열 모든 원소에 대하여 repeat(k)
  // 일단 1차원 배열 먼저 건들자!
  // 원소의 개수를 2개를 만들어버리기...!

  // 하나의 원소를 복사해서...!
  // 1. v가 어떤 원소인지 파악을 하고있어야 해!
  // 여기서 v는 문자열이야!
  // 문자열을 "a" => "a", "a"로 만들어줘야 해!
}

{
  // map
  let arr = [1, 2, 3, 4];
  console.log(arr.map((v) => v * 2));
}

{
  var students = [
    { id: 1, name: "james" },
    { id: 2, name: "tim" },
    { id: 3, name: "john" },
    { id: 4, name: "brian" },
  ].map((v) => v.name);
  console.log(students);
}

{
  var numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]; //array안에 array가 있는 경우

  let eachMulti = numbers.map((v) => v.map((e) => e * 2));
  console.log(eachMulti);
}

{
  // 각 원소를 2배해준다. 문자열!
  let arr = ["abcs", "bdwt", "cpim"].map((v) => {
    return [v, v];
  });
  console.log(arr);
}

{
  // 각 원소를 2배 해준다....
  let arr = [
    ".xx...xx.",
    "x..x.x..x",
    "x...x...x",
    ".x.....x.",
    "..x...x..",
    "...x.x...",
    "....x....",
  ];
  //   let newA = arr.map((v) => [v, v].));
  console.log(newA);
}
