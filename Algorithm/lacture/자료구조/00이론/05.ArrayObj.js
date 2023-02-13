"use strict";
// 배열과 객체

// 배열
// - 연관된 데이터를 연속적으로 보관하는 복합 타입
// - 배열의 멤버가 된 순간 index가 0번부터 붙게된다.
// - 출석번호와 똑같다! => 7번 외치면 내가 되듯이..

// 객체
// - 큰 책상
// - 속성은 책상안에 있는 각각의 사물함.
// - 값은 사물함 안에 있는 값!

// 배열 생성
let arr = [];
let arr1 = new Array();
let arr2 = [1, 2, 3, 4, 5];
let arr3 = new Array(5); // 크기가 5인 빈 배열
let arr4 = new Array(6).fill(1); // 6인데 1로 전부 채워줘. => 만약 100개라면 이걸 꼭 써줘야 돼!

let arr5 = Array.from({ length: 30 }, (_, i) => i + 2); // 로직으로 0 + 2부터 30개!
console.log(arr5);
console.log(arr3);

// 배열 함수
// 1. 배열을 문자열로
{
  let arr = new Array(6).fill(3);
  console.log(arr.join(", "));
}
// 2. reverse : 거꾸로 뒤집기(❗️원래 배열에도 영향이 가서 복사를 해서 사용하자...❗️)
{
  let arr = Array.from({ length: 20 }, (_, i) => i + 1); // i + 1은 1부터 20개 출력해주겠다! 라는 의미.
  let copyArr = [...arr];
  console.log(copyArr.reverse());
  console.log(arr);
}

// 3. concat : 두 배열을 합친다
// -> 근데 스프레드 연산자가 더 편함.
{
  let arr = [7, 8, 9];
  let arr2 = [9, 10, 11];
  // 1. concat()
}

// 4. 값 추가 삭제
// push, pop
{
  let arr = [1];
  arr.push(3, 4, 5, 6);
  arr.pop(); // 뒤에 값 1개 삭제!
}

// shift(맨 앞 삭제), unshift(맨 앞 추가)
{
  let arr = [2, 3, 4];
  arr.unshift(0, 1); // O(n)
  arr.shift(); // O(n)
}

// 배열 값을 잘라서 일부분만 가져오기!
// slice(2, 4); // 2부터 4번전까지 잘라서 가져온다!
// 원본이 멀쩡해!!!!!!

{
  let arr = Array.from({ length: 20 }, (_, i) => i + 1);
  console.log(arr.slice(2, 5)); // index 2 3 4번!
  console.log(arr);
}

{
  let arr = [1, 2, 3, 4, 5];
  for (let items of arr) {
    // 조금 더 직관적임.
    console.log(items);
  }
}

{
  // 사실 자바스크립트에서 배열은 객체야!
  let arr = Array.from({ length: 20 }, (_, i) => i + 1);
  console.log(arr, typeof arr); // object

  arr["property"] = "value"; // 이게 추가돼도 length의 길이는 늘어나지 않아!
  console.log(arr);
  console.log(arr["length"]); // length도 객체 프로퍼티처럼 쓰여!
  // 이 방법은 추천하지 않아!
  // 배열은 배열대로 쓰자..!
}

// 객체 생성 : 리터럴 방식을 이용하자!
// 아까 사물함 생각하자!
{
  let obj = new Object();
  let obj2 = {
    name: "김지성", // name사물함 안에 김지성
    age: 26, // age라는 사물함 안에 26
  };

  // 객체 값 추가
  obj2["hello"] = "value"; // 대괄호 안에 문자열로 key를 추가한다.
  // 어떤 key가 올 지 모를 때 이 대괄호안에 문자열 많이 쓰이니까 꼭 알아두자!
  obj2.phone = "iphone";
  console.log(obj2);

  // 값 삭제
  delete obj2.phone; // phone이라는 사물함 삭제!

  // in : key가 존재하는지!! (email사물함이 존재하는지)
  console.log("email" in obj2, "phone" in obj2);

  // key집합들!
  console.log(Object.keys(obj2)); // 배열안에 문자열 형태로 key가 나오게 된다!

  // values 집합들
  console.log(Object.values(obj2)); // 역시 배열로 값들이 나온다.

  // for..in : 객체의 key값을 순회하게 된다.
  for (let key in obj2) {
    console.log(key); // name age hello
    console.log(obj2[key]); // 값
  }
  // ❗️객체에선 for of를 쓸 수 없어.. iterable하지 않기 떄문에!
}
